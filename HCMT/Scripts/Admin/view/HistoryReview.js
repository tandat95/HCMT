Ext.define('Admin.view.HistoryReview', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.historyreview',
    layout: 'fit',

    store: Ext.create('Ext.data.Store', {
        fields: ["Time", "Value", "Min", "Max"]
    }),
    columns: [
        {
            text: 'STT',
            xtype: 'rownumberer',
            width: 60
        },
        {
            text: 'Ngày',
            dataIndex: 'Time',
            flex: 1,
            renderer: function (value) {
                return Ext.Date.format(value, 'd/m/Y');
            }
        },
        {
            text: 'Giờ',
            dataIndex: 'Time',
            flex: 1,
            renderer: function (value) {
                return Ext.Date.format(value, 'h:i:s');
            }
        },{
            text: 'Nhiệt độ thấp nhất',
            dataIndex: 'Min',
            flex: 1
        },{
            text: 'Nhiệt độ cao nhất',
            dataIndex: 'Max',
            flex: 1
        }
    ]
});