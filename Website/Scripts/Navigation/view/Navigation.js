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
                cls: 'app-logo',
                handler: function () {
                    window.location.href = window.location.origin + '/home';
                }
            },
            {
                xtype: 'button',
                width: 200,
                cls: 'common-navigation-button btn-account',
                iconAlign: 'left',
                textAlign: 'left',
                scale: 'medium',
                itemId: 'account',
                tooltip: 'Account',
                iconCls: 'fa fa-user fa-2x',
                menu: [
                    {
                        text: 'Đăng xuất',
                        iconCls: 'fa fa-sign-out',
                        handler: function () {
                            window.location.href = window.location.origin + '/account/logout';
                        }
                    },
                    {
                        text: 'Đổi mật khẩu',
                        iconCls:'fa fa-unlock-alt'
                    }
                ],
                listeners: {
                    afterrender: function (btn) {
                        var userName = document.getElementById('CurrentUser');
                        if (userName) btn.setText(userName.innerHTML);
                    }
                }
            }
        ];
        this.callParent();
    }
});