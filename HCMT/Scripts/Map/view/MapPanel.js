Ext.define('HCMT.view.MapPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mappanel',
    layout: 'fit',
    html: '<div id = "mapContainer" style = "height: 100%"></div><div class= "map-label"><div id = "divMin">Min</div><div id = "temp-label"></div><div id = "divMax">Max</div></div>',
    initComponent: function () {
        this.callParent();
    }
});