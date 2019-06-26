Ext.define('Home.view.TempGrid', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tempgrid',
    layout: 'fit',
    initComponent: function () {
        var me = this;
        Ext.define('Temp', {
            extend: 'Ext.data.Model',
            fields: ["Time", "Value"]
        });

        me.items = [
            {
                xtype: 'grid',
                layout: 'fit',
                scrollable: true,
                store: {
                    fields: ["Time", "Value"]
                },
                columns: [
                    {
                        text: 'Thời gian',
                        dataIndex: 'Time',
                        flex: 1,
                        renderer: function (value) {
                            return Ext.Date.format(value, 'd/m/Y');
                        }
                    }
                ],
                listeners: {
                    afterrender: function (grid) {
                        HCMT.Library.Ajax.TempAjax.GetTempData(new Date("3/1/2018"), new Date("4/30/2018"), function (res) {
                            if (res && res.value) {
                                grid.getStore().setData(res.value);
                            }
                        })
                    }
                }
            }
        ]

        this.callParent();
    }
});