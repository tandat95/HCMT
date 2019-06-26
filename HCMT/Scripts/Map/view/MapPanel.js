Ext.define('HCMT.view.MapPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mappanel',
    layout: 'fit',
    html: '<div id = "mapContainer" style = "height: 100%"></div>',
    initComponent: function () {
        this.callParent();
    }
});