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
                itemId: 'tempGrid',
                layout: 'fit',
                scrollable: true,
                store: Ext.create('Ext.data.Store', {
                    fields: ["Time", "Value", "Min", "Max"]
                }),
                tbar: [
                    {
                        fieldLabel: 'Tốc độ',
                        labelWidth: 60,
                        xtype: 'combobox',
                        itemId: 'cbxTimeout',
                        value: 1000,
                        valueField: 'value',
                        displayField: 'name',
                        store: {
                            fields: ["name", "value"],
                            data: [
                                {
                                    name: "Chậm",
                                    value: 1500
                                },
                                {
                                    name: "Trung bình",
                                    value: 1000
                                },
                                {
                                    name: "Nhanh",
                                    value: 500
                                }
                            ]
                        }
                    }, '->',
                    {
                        xtype: 'button',
                        iconCls: 'icon-btn-play',
                        text: "Chạy",
                        status: 'STOP', //PLAY
                        handler: function (btn) {
                            if (btn.status === 'STOP') {
                                let timeout = btn.up('panel').down('#cbxTimeout').getValue();
                                var grid = btn.up('viewport').down('#tempGrid');
                                btn.setIconCls('icon-btn-pause');
                                btn.setText('Dừng');
                                btn.status = 'PLAY';
                                var record = grid.getSelection()[0];
                                let i = record ? grid.getStore().getRange().indexOf(record) : 0;
                                btn.playAction = setInterval(function () {
                                    grid.setSelection(i);
                                    grid.view.scrollRowIntoView(i);
                                    i++;
                                    if (i >= grid.getStore().getRange().length) {
                                        if (btn.playAction) window.clearInterval(btn.playAction);
                                        btn.setIconCls('icon-btn-play');
                                        btn.setText('Chạy');
                                        btn.status = 'STOP';
                                    }
                                }, timeout);
                            } else {
                                if (btn.playAction) window.clearInterval(btn.playAction);
                                btn.setIconCls('icon-btn-play');
                                btn.setText('Chạy');
                                btn.status = 'STOP';
                            }
                        }
                    }
                ],
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