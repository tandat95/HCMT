Ext.define('Home.controller.Viewport', {
    extend: 'Ext.app.Controller',
    views: ['Viewport'],
    init: function () {
        this.control
            ({
                'viewport':
                {
                    afterrender: function (view, e) {

                    },
                    afterlayout: function (view, layout, eOpts) {

                    }
                },
                'viewport #btnSearch':
                {
                    click: this.onBtnSearchClick
                }
            });
    },
    onBtnSearchClick: function (btn) {
        var viewport = btn.up('viewport'); 
        var fromDate = viewport.down('#txtFromDate').getValue();
        var toDate = viewport.down('#txtToDate').getValue();
        if (fromDate && toDate) {
            var grid = viewport.down('#tempGrid');
            grid.fireEvent('reloaddata', grid, fromDate, toDate);
        }
    }
});