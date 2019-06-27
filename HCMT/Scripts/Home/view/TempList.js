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
                        });
                    },
                    select: function (grid, record, index, eOpts) {
                        var map = grid.view.up('viewport').down('mappanel').map;
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
                                samples.push(coors.concat(parseFloat(values[i])));
                            }
                            if (map.krigingLayer) {
                                map.removeLayer(map.krigingLayer);
                            }
                            map.krigingLayer = new maptalks.KrigingLayer('kriging', samples, {
                                colors: colors,
                                regions: map.hcmPolygon,
                                width: 0.008,
                                opacity: 0.5

                            }).addTo(map);
                            if (!map.vLayer) {
                                map.vLayer = new maptalks.VectorLayer('vlayer').addTo(map);
                                samples.forEach(function (m) {
                                    var circle = new maptalks.Circle([m[0], m[1]], 12, {
                                        symbol: {
                                            lineColor: '#f00',
                                            fillColor: '#f00'
                                        }
                                    }).addTo(map.vLayer);
                                });
                            }                     
                        }

                        
                    }
                }
            }
        ];

        this.callParent();
    }
});