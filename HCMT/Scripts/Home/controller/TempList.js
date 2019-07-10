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
                                for (let j = 0; j < coors.Coors.length; j++) {
                                    
                                    samples.push(coors.Coors[j].concat(values[i]));
                                }
                            }
                            if (map.krigingLayer) {
                                map.removeLayer(map.krigingLayer);
                            }
                            map.gridKriging = null; //null: to load new grid for Kriging,

                            map.krigingLayer = new maptalks.KrigingLayer('Nhiệt độ bề mặt', samples, {
                                colors: colors,
                                regions: map.hcmPolygon,
                                width: 0.008,
                                opacity: 0.7,
                                alpha: 100,
                                zlim: [15, 45]
                            }).addTo(map);

                            //var txtLabelMin = document.getElementById('divMin');
                            //var txtLabelMax = document.getElementById('divMax');

                            //txtLabelMin.innerText = record.get('Value').min().toFixed(2);
                            //txtLabelMax.innerText = record.get('Value').max().toFixed(2);


                            //map.vLayer = new maptalks.VectorLayer('vlayer').addTo(map);
                            //samples.forEach(function (m) {
                            //    var circle = new maptalks.Circle([m[0], m[1]], 12, {
                            //        symbol: {
                            //            lineColor: '#f00',
                            //            fillColor: '#f00'
                            //        }
                            //    }).addTo(map.vLayer);
                            //});

                        }
                    },
                    itemdblclick: function (grid, record, item, index, e, eOpts) {
                        var me = this;
                        Ext.create('Ext.window.Window', {
                            width: 600,
                            height: 450,
                            title: Ext.Date.format(record.get('Time'), 'd/m/Y'),
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    layout: 'fit',
                                    items: [
                                        {
                                            title: "Biểu đồ",
                                            itemId: 'chartPanel',
                                            layout: 'fit',
                                            scrollable: true,
                                            listeners: {
                                                afterrender: function (panel) {
                                                    var data = [];
                                                    var names = record.get('DistrictNames');
                                                    var values = record.get('Value');
                                                    for (let i = 0; i < values.length; i++) {
                                                        data.push([names[i], values[i]]);
                                                    }

                                                    panel.chart = Highcharts.chart(panel.getId() + '-body', {
                                                        chart: {
                                                            type: 'column'
                                                        },
                                                        title: {
                                                            text: 'Nhiệt độ TP.HCM ngày ' + Ext.Date.format(record.get('Time'), 'd/m/Y')
                                                        },

                                                        xAxis: {
                                                            type: 'category',
                                                            labels: {
                                                                rotation: -45,
                                                                style: {
                                                                    fontSize: '12px',
                                                                    fontFamily: 'Verdana, sans-serif'
                                                                }
                                                            }
                                                        },
                                                        yAxis: {
                                                            min: 15,
                                                            title: {
                                                                text: 'Nhiệt độ (°C)'
                                                            }
                                                        },
                                                        legend: {
                                                            enabled: false
                                                        },
                                                        tooltip: {
                                                            pointFormat: 'Nhiệt độ: <b>{point.y:.1f} °C</b>'
                                                        },
                                                        series: [{
                                                            name: Ext.Date.format(record.get('Time'), 'd/m/Y'),
                                                            data: data,
                                                            dataLabels: {
                                                                enabled: true,
                                                                rotation: -90,
                                                                color: '#FFFFFF',
                                                                align: 'right',
                                                                format: '{point.y:.1f}', // one decimal
                                                                y: 10, // 10 pixels down from the top
                                                                style: {
                                                                    fontSize: '12px',
                                                                    fontFamily: 'Verdana, sans-serif'
                                                                }
                                                            }
                                                        }]
                                                    });
                                                },
                                                resize: me.onPanelResize
                                            }
                                        },
                                        {
                                            xtype: 'grid',
                                            layout: 'fit',
                                            height: 400,
                                            title: 'Giá trị',
                                            autoScroll: true,
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
                                                    renderer: function (value) {
                                                        return parseFloat(value.toFixed(2));
                                                    },
                                                    flex: 1
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ],


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
            });
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

    },
    onPanelResize: function (panel, newWidth, newHeight, c, d) {
        if (panel.chart) {
            panel.chart.reflow();
        }
    }
});