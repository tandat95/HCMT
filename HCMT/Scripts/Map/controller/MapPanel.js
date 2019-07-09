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
        me.createLabel();
    },
    initMap: function (panel) {
        panel.map = new maptalks.Map('mapContainer', {
            center: [106.667646, 10.783229],
            zoom: 10,
            minZoom: 1,
            maxZoom: 19,
            layerSwitcherControl: {
                'position': 'top-right',
                // title of base layers
                'baseTitle': 'Bản đồ nền',
                // title of layers
                'overlayTitle': 'Lớp phủ',
                // layers you don't want to manage with layer switcher
                'excludeLayers': [],
                // css class of container element, maptalks-layer-switcher by default
                'containerClass': 'maptalks-layer-switcher'
            },

            baseLayer: new maptalks.GroupTileLayer('Base TileLayer', [
                new maptalks.TileLayer('Mặc định', {
                    'urlTemplate': 'http://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                    'subdomains': ['a', 'b', 'c']
                }),
                new maptalks.TileLayer('Sáng', {
                    'visible': false,
                    'urlTemplate': 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    'subdomains': ['a', 'b', 'c', 'd']
                }),
                new maptalks.TileLayer('Tối', {
                    'visible': false,
                    'urlTemplate': 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                    'subdomains': ['a', 'b', 'c', 'd']
                })
            ])

        });


        var hcmBound = HCMT.Global.HCM_BOUND.Coors;
        panel.map.hcmPolygon = new maptalks.Polygon(hcmBound, {
            visible: true,
            editable: true,
            cursor: 'pointer',
            shadowBlur: 0,
            shadowColor: 'black',
            draggable: false,
            dragShadow: false, // display a shadow during dragging
            drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
            symbol: {
                'lineColor': '#34495e',
                'lineWidth': 2,
                'polygonFill': 'rgb(135,196,240)',
                'polygonOpacity': 0
            }
        });
        new maptalks.VectorLayer('Ranh giới HCM',panel.map.hcmPolygon).addTo(panel.map);
    },
    createLabel: function () {
        var label = document.getElementById('temp-label');
        if (label) {
            var child = document.createElement('DIV');
            var colors = HCMT.Global.COLOR_RANGE;
            var labelHeight = $("#temp-label").height();
            var childHeight = labelHeight / colors.length + 'px';
            child.style.height = childHeight;
            child.style.width = '100%';
            for (let i = 0; i < colors.length; i++) {
                var cloneEl = Ext.clone(child);
                cloneEl.style.background = colors[i];
                label.appendChild(cloneEl);
            }
        }
    }
});