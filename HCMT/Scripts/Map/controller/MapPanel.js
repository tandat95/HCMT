Ext.define('HCMT.controller.MapPanel', {
    extend: 'Ext.app.Controller',

    views: ['MapPanel'],

    init: function () {
        this.control
            ({
                'mappanel':
                {
                    afterrender: this.onMapRender
                }
            });
    },
    onMapRender: function (panel) {
        var me = this;
        me.initMap(panel);
    },
    initMap: function (panel) {
        panel.map = new maptalks.Map('mapContainer', {
            center: [106.667646, 10.783229],
            zoom: 10,
            minZoom: 1,
            maxZoom: 19,
            baseLayer: new maptalks.TileLayer('tile', {
                'urlTemplate': 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                'subdomains': ['a', 'b', 'c', 'd', 'e']
            })
        });
    }
        
});