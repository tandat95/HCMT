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
                        value: new Date(),
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
                                    xtype: 'tempgrid',
                                   
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