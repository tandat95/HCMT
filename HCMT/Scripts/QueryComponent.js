Ext.define('Share.component.QueryComponent', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.querycomponent',
    layout: 'fit',
    FIELDS: [],

    QUERY: {
        Url: '',
        Method: '',
        Limit: 25,
        Start: 0,
        Data: {}
    },

    columns: [],

    reload: () => {
        var me = this;
        var store = me.getStore();
        if (store) {
            store.load(Ext.merge({
                start: me.QUERY.Limit,
                limit: me.QUERY.Start,
            }, me.QUERY.Data));
        }
    },

    initComponent: function () {
        var me = this;
        me.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: me.FIELDS,
            //pageSize: me.QUERY.Limit, // items per page
            proxy: {
                type: 'ajax',
                url: me.QUERY.Url, // url that will load data with respect to start and limit params
                headers: { 'X-AjaxPro-Method': me.QUERY.Method },

                paramsAsJson: true,
                extraParams: me.QUERY.Data,
                actionMethods: {
                    create: 'POST',
                    read: 'POST',
                    update: 'POST',
                    destroy: 'POST'
                },
               
                reader: {
                    type: 'json',
                    rootProperty: 'value.Data',
                    totalProperty: 'value.Total',
                    successProperty: 'value.Success'
                }
            }
        });
        me.bbar = [
            {
                store: me.store,
                xtype: 'pagingtoolbar',
                inputItemWidth: 50,
                beforePageText: 'Trang',
                itemId: 'vehiclePickerPaging',
                displayInfo: false,
                overflowHandler: 'menu'
            }
        ];
        me.store.load(Ext.merge({
            start: me.QUERY.Limit,
            limit: me.QUERY.Start,
        }, me.QUERY.Data));
        this.callParent();
    }
});