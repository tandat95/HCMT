Ext.define('Home.controller.TempList', {
    extend: 'Ext.app.Controller',
    views: ['TempGrid'],
    init: function () {
        this.control
            ({
                'tempgrid #tempGrid':
                {
                    afterrender: function (view, e) {

                    },
                    reloaddata: this.reloadData
                }
            });
    },
    reloadData: function (grid, fromDate, toDate) {
        grid.getStore().setData(null);
        grid.getEl().mask('Đang tải...');
        HCMT.Library.Ajax.TempAjax.GetTempData(fromDate, toDate, function (res) {
            if (res && res.value) {
                grid.getStore().setData(res.value);
            }
            grid.getEl().unmask();
        });

    }
});