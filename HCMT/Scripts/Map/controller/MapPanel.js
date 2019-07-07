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
            baseLayer: new maptalks.TileLayer('tile', {
                'urlTemplate': 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                'subdomains': ['a', 'b', 'c', 'd', 'e']
            })
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
        new maptalks.VectorLayer('vector',panel.map.hcmPolygon).addTo(panel.map);
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