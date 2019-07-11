Ext.define('Admin.view.ImportHitory', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.importhistory',
    layout: 'fit',
    initComponent: function () {
        var me = this;
        me.items = [
            {
                xtype: 'grid',
                itemId: 'tempGrid',
                layout: 'fit',
                scrollable: true,
                store: Ext.create('Ext.data.Store', {
                    fields: ["Name", "Id"]
                }),

                columns: [
                    {
                        text: 'STT',
                        xtype: 'rownumberer',
                        width: 60
                    },
                    {
                        text: 'Tên file',
                        dataIndex: 'Name',
                        flex: 1
                    },
                    {
                        text: 'Thời gian',
                        dataIndex: 'Time',
                        flex: 1,
                        renderer: function (value) {
                            return Ext.Date.format(value, 'd/m/Y h:i:s');
                        }
                    },
                    {
                        text: 'ID',
                        flex: 1,
                        dataIndex: 'Id'
                    }
                ]
            }
        ];
        me.dockedItems = [
            {
                xtype: 'pagingtoolbar',
                inputItemWidth: 50,
                beforePageText: 'Trang',
                dock: 'bottom',
                itemId: 'vehiclePickerPaging',
                displayInfo: false,
                overflowHandler: 'menu'
            }
        ];
        this.callParent();
    }
});