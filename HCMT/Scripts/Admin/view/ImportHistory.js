Ext.define('Admin.view.ImportHistory', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.importhistory',
    layout: 'fit',
    itemId: 'historyLogGrid',
    store: Ext.create('Ext.data.Store', {
        fields: ["FileName", "ID", "Time"],
        sorters: [{
            property: 'Time',
            direction: 'ASC' // or 'DESC'
        }]
    }),
    scrollable: true,
    multiSelect: true,
    columns: [
        {
            text: 'STT',
            xtype: 'rownumberer',
            width: 60
        },
        {
            text: 'Tên file',
            dataIndex: 'FileName',
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
            dataIndex: 'ID'
        }
    ],
    initComponent: function () {
        var me = this;
        me.dockedItems = [
            {
                store: me.store,
                xtype: 'pagingtoolbar',
                inputItemWidth: 50,
                beforePageText: 'Trang',
                dock: 'bottom',
                itemId: 'vehiclePickerPaging',
                displayInfo: false,
                overflowHandler: 'menu'
            }
        ];
        me.tbar = [
            {
                text: 'Nhập',
                iconCls: 'icon-btn-import',
                itemId: 'btnImport'
            },
            {
                text: 'Xóa',
                iconCls: 'icon-btn-remove',
                itemId: 'btnDelete'
            }
        ]
        this.callParent();
    }
});