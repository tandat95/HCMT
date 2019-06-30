Ext.define('Home.controller.TempList', {
    extend: 'Ext.app.Controller',
    views: ['TempGrid'],
    init: function () {
        this.control
            ({
                'tempgrid #tempGrid':
                {
                    afterrender: function (grid) {
                        HCMT.Library.Ajax.TempAjax.GetTempData(new Date("3/1/2018"), new Date("4/30/2018"), function (res) {
                            if (res && res.value) {
                                grid.getStore().setData(res.value);
                            }
                        });
                    },
                    select: function (grid, record, index, eOpts) {

                        var viewport = grid.view.up('viewport');
                        var map = viewport.down('mappanel').map;
                        var values = record.get('Value');
                        var districtNames = record.get('DistrictNames');
                        var colors = HCMT.Global.COLOR_RANGE;
                        var districtPoints = HCMT.Global.DISTRICT_POINT;
                        if (values && Ext.isArray(values) && districtPoints && Ext.isArray(districtPoints) && districtNames && Ext.isArray(districtNames)) {
                            var samples = [];
                            for (let i = 0; i < values.length; i++) {
                                var coors = districtPoints.filter((x) => { return x.Name === districtNames[i]; })[0];
                                if (!coors || !coors.Coors || !coors.Coors[0]) { continue; }
                                coors = coors.Coors[0];
                                samples.push(coors.concat(values[i]));
                            }
                            if (map.krigingLayer) {
                                map.removeLayer(map.krigingLayer);
                            }
                            map.gridKriging = null; //null: to load new grid for Kriging,

                            map.krigingLayer = new maptalks.KrigingLayer('kriging', samples, {
                                colors: colors,
                                regions: map.hcmPolygon,
                                width: 0.008,
                                opacity: 0.5,
                                alpha: 100
                            }).addTo(map);
                            //if (!map.vLayer) {
                            //    map.vLayer = new maptalks.VectorLayer('vlayer').addTo(map);
                            //    samples.forEach(function (m) {
                            //        var circle = new maptalks.Circle([m[0], m[1]], 12, {
                            //            symbol: {
                            //                lineColor: '#f00',
                            //                fillColor: '#f00'
                            //            }
                            //        }).addTo(map.vLayer);
                            //    });
                            //}                     
                        }
                    },
                    itemdblclick: function (grid, record, item, index, e, eOpts) {
                        var me = this;
                        Ext.create('Ext.window.Window', {
                            width: 400,
                            height: 400,
                            title: Ext.Date.format(record.get('Time'), 'd/m/Y'),
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'grid',
                                            layout: 'fit',
                                            title: 'Giá trị',
                                            scrollable: true,
                                            store: {
                                                fields: ["DistrictName", "Value"],
                                                data: me.getDetailData(record)
                                            },
                                            columns: [
                                                {
                                                    text: 'Quận',
                                                    dataIndex: 'DistrictName',
                                                    flex: 1
                                                },
                                                {
                                                    text: 'Nhiệt độ',
                                                    dataIndex: 'Value',
                                                    flex: 1
                                                }
                                            ]
                                        },
                                        {
                                            title: "Biểu đồ"
                                        }
                                    ]
                                }
                            ]
                        }).show();
                    },
                    reloaddata: this.reloadData
                }
            });
    },
    getDetailData: function (rec) {
        var dNames = rec.get('DistrictNames');
        var values = rec.get('Value');
        var data = [];
        for (let i = 0; i < dNames.length; i++) {
            data.push({
                DistrictName: dNames[i],
                Value: values[i]
            })
        }
        return data;
    },
    reloadData: function (grid, fromDate, toDate) {
        grid.getStore().setData(null);
        grid.getEl().mask('Đang tải...');
        HCMT.Library.Ajax.TempAjax.GetTempData(fromDate, toDate, function (res) {
            if (res && res.value) {
                grid.getStore().setData(res.value);
            }
            grid.getEl().unmask();
        });

    }
});