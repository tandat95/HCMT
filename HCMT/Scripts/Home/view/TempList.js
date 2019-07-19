Ext.define('Home.view.TempGrid', {
    extend: 'Share.component.QueryComponent',
    alias: 'widget.tempgrid',

    FIELDS: ["Time", "Value", "Min", "Max"],
    QUERY: {
        Url: HCMT.Library.Ajax.TempAjax.url,
        Method: 'GetTempData',
        Limit: 30,
        Start: 0
    },
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
                return Ext.Date.format(HCMT.Global.parseDate(value), 'd/m/Y');
            }
        },
        {
            text: 'Giờ',
            dataIndex: 'Time',
            flex: 0.6,
            renderer: function (value) {
                return Ext.Date.format(HCMT.Global.parseDate(value), 'h:i');
            }
        },
        {
            text: 'Thấp nhất (°C)',
            dataIndex: 'Min',
            flex: 1,
            renderer: function (value) {
                return value.toFixed(2);
            }

        },
        {
            text: 'Cao nhất (°C)',
            dataIndex: 'Max',
            sortable: true,
            flex: 1,
            renderer: function (value) {
                return value.toFixed(2);
            }
        }
    ],
    tbar: [
        {
            fieldLabel: 'Tốc độ',
            labelWidth: 60,
            xtype: 'combobox',
            itemId: 'cbxTimeout',
            value: 1000,
            valueField: 'value',
            displayField: 'name',
            store: {
                fields: ["name", "value"],
                data: [
                    {
                        name: "Chậm",
                        value: 1500
                    },
                    {
                        name: "Trung bình",
                        value: 1000
                    },
                    {
                        name: "Nhanh",
                        value: 500
                    }
                ]
            }
        }, '->',
        {
            xtype: 'button',
            iconCls: 'icon-btn-play',
            text: "Chạy",
            itemId: 'btnPlay',
            status: 'STOP' //PLAY
            
        }
    ]
});