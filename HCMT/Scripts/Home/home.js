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
                'HCMT.controller.MapPanel'
                //'Document.controller.UserProfile',
                //'Document.controller.UserPassword',

                //'Welcome',
                //'HomeViewport',
                //'Common.controller.Navigation'
            ],

        launch: function () {

            // TODO - Launch the application
            //if (Ext.browser.is.Gecko && Ext.browser.version.major < 28) {
            //    Ext.getBody().addCls('x-flex-wrap-broken');
            //}
            // Remove loading screen after init page
            //setTimeout(function () {
            //    //Ext.Element.query('.loading-mask')[0].remove();
            //    var parentNode = document.getElementById("divContent");

            //    parentNode.removeChild(document.getElementById("loading-mask"));
            //    parentNode.removeChild(document.getElementById("loading"));
          
            //}, 0);
        }
    });
})();