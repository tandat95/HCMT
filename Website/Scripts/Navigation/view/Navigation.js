Ext.define('HCMT.view.Navigation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.common-navigation',
    height: 60,
    shadow: true,

    region: 'north',
    cls: 'common-navigation',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function () {

        this.items = [
            {
                //xtype: 'component',
                xtype: 'button',
                width: 700,
                height: 60,
                href: '',
                cls: 'app-logo'
            },
            {
                xtype: 'button',
                width: 100,
                cls: 'common-navigation-button btn-account',
                iconAlign: 'left',
                textAlign: 'left',
                scale: 'medium',
                itemId: 'account',
                tooltip: 'Account',
                iconCls: 'fa fa-user fa-2x',
                text: 'Admin',
                menu: [
                    {
                        text: 'Đăng xuất'
                    },
                    {
                        text: 'Đổi mật khẩu'
                    }
                ]
            }
        ];
        this.callParent();
    }
});