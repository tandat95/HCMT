(function () {


    Ext.setGlyphFontFamily('FontAwesome');

    Ext.application({
        name: 'Admin',
        autoCreateViewport: 'Admin.view.Viewport',

        controllers:
            [

            ],

        launch: function () {
            $(document).ready(function () {
                $("script ~ div").css('display', 'none');
                $("center a").css('display', 'none');
            });
        }
    });
})();