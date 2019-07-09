Ext.define('HCMT.view.Navigation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.common-navigation',
    height: 60,
    region: 'north',
    cls: 'common-navigation',
    layout: 'hbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'component',
                width: 700,
                height: 60,
                href:'',
                cls: 'app-logo'
            }
        ];
        this.callParent();
    }
});