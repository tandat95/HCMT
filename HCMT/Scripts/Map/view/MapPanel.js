Ext.define('HCMT.view.MapPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mappanel',
    layout: 'fit',
    html: '<div id = "mapContainer" style = "height: 100%"></div><div class= "map-label"><div id = "divMin">15°C</div><div id = "temp-label"></div><div id = "divMax">45°C</div></div>',
    initComponent: function () {
        this.callParent();
    }
});