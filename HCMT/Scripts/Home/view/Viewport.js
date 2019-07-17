Ext.define('Home.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.home-viewport',
    layout: 'border',

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'common-navigation',
                layout: 'fit'
            },
            {
                region: 'center',
                itemId: 'centerPanel',
                layout: 'fit',
                tbar: [
                    {
                        xtype: 'datefield',
                        itemId: 'txtFromDate',
                        fieldLabel: 'Từ ngày',
                        value: new Date("3/1/2018"),
                        labelWidth: 60,
                        allowBlank: false,
                        width: 200,
                        listeners: {
                            change: function (field, chooseDate, oldValue, eOpts) {

                            }
                        }
                    },
                    {
                        xtype: 'datefield',
                        itemId: 'txtToDate',
                        value: new Date("4/30/2018"),
                        fieldLabel: 'Đến ngày',
                        labelWidth: 60,
                        name: 'dtChooseDate',
                        allowBlank: false,
                        width: 200,
                        listeners: {
                            change: function (field, chooseDate, oldValue, eOpts) {
                            }
                        }
                    },
                    '->',
                    {
                        xtype: 'button',
                        itemId: 'btnSearch',
                        text: 'Xem',
                        iconCls: 'btn-search-small'
                    }
                ],
                items: [
                    {

                        layout: 'border',
                        items: [
                            {
                                region: 'west',
                                title: 'Mô phỏng nhiệt độ bề mặt',
                                layout: 'fit',
                                width: 450,
                                split: true,
                                collapsible: true,
                                hideCollapseTool: true,
                                collapseMode: 'mini',
                                items: {
                                    xtype: 'querycomponent',
                                    FIELDS: ["Time", "Value", "Min", "Max"],
                                    QUERY: {
                                        Url: HCMT.Library.Ajax.TempAjax.url,
                                        Method: 'GetTempData',
                                        Limit: 25,
                                        Start: 0,
                                        Data: {
                                            endTime: "/Date(1563296400000)/",
                                            startTime: "/Date(1519837200000)/"
                                        }
                                    },
                                    columns: [
                                        {
                                            text: 'STT',
                                            xtype: 'rownumberer',
                                            width: 60
                                        },
                                        {
                                            text: 'Ngày',
                                            dataIndex: 'Time',
                                            flex: 1,
                                            renderer: function (value) {
                                                return Ext.Date.format(value, 'd/m/Y');
                                            }
                                        },
                                        {
                                            text: 'Giờ',
                                            dataIndex: 'Time',
                                            flex: 0.7,
                                            renderer: function (value) {
                                                return Ext.Date.format(value, 'h:i');
                                            }
                                        },
                                        {
                                            text: 'Thấp nhất (°C)',
                                            dataIndex: 'Min',
                                            flex: 1

                                        },
                                        {
                                            text: 'Cao nhất (°C)',
                                            dataIndex: 'Max',
                                            sortable: true,
                                            flex: 1
                                        }
                                    ]
                                }
                            },
                            {

                                region: 'center',
                                xtype: 'mappanel'
                            }
                        ]
                    }

                ]
            }
        ];


        this.callParent();
    }
})