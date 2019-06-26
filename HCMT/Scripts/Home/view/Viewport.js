Ext.define('Home.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.home-viewport',
    layout: 'border',

    initComponent: function () {
        var me = this;

        me.items = [
            {
                region: 'center',
                itemId: 'centerPanel',
                layout: 'fit',
                tbar:[
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Từ ngày',
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
                                layout:'fit',
                                width: 400,
                                split: true,
                                collapsible: true,
                                hideCollapseTool: true,
                                collapseMode: 'mini',
                                items: {
                                    xtype: 'tempgrid'
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