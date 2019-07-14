Ext.define('Admin.controller.ImportHistory', {
    extend: 'Ext.app.Controller',
    views: ['ImportHistory'],
    init: function () {
        this.control
            ({
                'importhistory':
                {
                    afterrender: function (grid) {
                        grid.fireEvent('reload', grid);
                    },
                    select: function (grid, record) {
                        var id = record.get('ID');
                        var historyreview = grid.view.up('viewport').down('historyreview');
                        historyreview.mask('Đang tải..');
                        if (id) {
                            HCMT.Library.Ajax.TempAjax.GetDataByLogId(id, function (res) {
                                historyreview.unmask();
                                if (res.value) {
                                    var data = [];
                                    for (let i = 0; i < res.value.length; i++) {
                                        data.push({
                                            Time: res.value[i].Time,
                                            Value: res.value[i].Value,
                                            Min: Math.min.apply(Math, res.value[i].Value).toFixed(2),
                                            Max: Math.max.apply(Math, res.value[i].Value).toFixed(2),
                                            DistrictNames: res.value[i].DistrictNames,
                                            ID: res.value[i].ID
                                        });
                                    }

                                    historyreview.getStore().setData(data);
                                }
                            })
                        }
                    },
                    reload: function (grid, callback) {
                        grid.mask("Đang tải..")
                        HCMT.Library.Ajax.TempAjax.GetAllDataImportLog(function (res) {
                            grid.unmask();
                            if (res.value) {
                                grid.getStore().loadData(res.value);
                                if (typeof (callback) === 'function') callback(grid);
                            }
                        })
                    }
                },
                'importhistory #btnImport':
                {
                    click: function (btn) {
                        Ext.create('Ext.window.Window', {
                            title: 'Chọn file tải lên',
                            modal: true,
                            width: 350,
                            height: 120,
                            items: [
                                {
                                    xtype: 'form',
                                    layout: 'fit',
                                    bodyPadding: 10,
                                    frame: true,
                                    items: [
                                        {
                                            xtype: 'filefield',
                                            itemId: 'fileSelector',
                                            width: '100%',
                                            fieldLabel: 'Đường dẫn',
                                            labelWidth: 80,
                                            msgTarget: 'side',
                                            allowBlank: false,
                                            anchor: '100%',
                                            buttonText: 'Chọn'
                                        }
                                    ],
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Tải lên',
                                    handler: function (btn) {
                                        var window = btn.up('window');
                                        var form = window.down('form').getForm();
                                        if (form.isValid()) {
                                            form.submit({
                                                url: 'upload.ashx',
                                                waitMsg: 'Đang tải lên..',
                                                success: function (fp, o) {
                                                    window.close();
                                                    var logGrid = Ext.ComponentQuery.query('importhistory')[0];
                                                    if (logGrid) {
                                                        logGrid.fireEvent('reload', logGrid, function (grid) {
                                                            grid.setSelection(grid.getStore().getRange().length - 1);
                                                        })
                                                    }
                                                },
                                                failure: function () {
                                                   
                                                }
                                            });
                                        }
                                    }
                                }
                            ]
                        }).show();
                    }
                },
                'importhistory #btnDelete': {
                    click: function (btn) {
                        var window = btn.up('window');
                        var viewport = btn.up('viewport');
                        var logGrid = Ext.ComponentQuery.query('importhistory')[0];
                        var records = logGrid.getSelection();

                        Ext.Msg.show({
                            title: 'Xác nhận xóa?',
                            message: Ext.String.format('Xóa {0} bảng dữ liệu đã chọn?', records.length),
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.QUESTION,
                            fn: function (btn) {
                                if (btn === 'yes') {
                                    var IDs = [];
                                    for (let i = 0; i < records.length; i++) {
                                        IDs.push(records[i].get('ID'));
                                    }
                                    viewport.getEl().mask('Đang xóa..')
                                    HCMT.Library.Ajax.TempAjax.DeleteDataByIds(IDs, function (res) {
                                        viewport.unmask();
                                        if (res.value) {
                                            logGrid.fireEvent('reload', logGrid);
                                        }
                                    });
                                } else {
                                    
                                }
                            }
                        });


                        
                    }
                }
            });
    }
});