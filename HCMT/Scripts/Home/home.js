(function () {
    //Ext.Loader.setConfig({
    //    enabled: true,
    //    //paths: {
    //    //    'Ext.ux': '/cdn/extjs/5.1.0/ux'
    //    //}
    //});

    Ext.setGlyphFontFamily('FontAwesome');

    Ext.application({
        name: 'Home',
        autoCreateViewport: 'Home.view.Viewport',

        controllers:
            [
                'HCMT.controller.MapPanel',
                'Home.controller.TempList',
                'Home.controller.Viewport'
            ],

        launch: function () {
            $(document).ready(function () {
                        $("script ~ div").css('display', 'none');
                        $("center a").css('display', 'none');
                    });
        }
    });
})();