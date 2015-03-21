require.config({
    baseUrl: 'app',
    paths: {
        'angular': 'vendors/angular-1.3/angular',
        'ngRouter': 'vendors/angular-ui-router/angular-ui-router',
        'lodash': 'vendors/lodash-3.5.0/lodash'
        // 'main': 'main'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ngRouter': {
            deps: ['angular']
        }
    },
    priority: [
        'angular'
    ],
});


require(['app'], function(App) {

    App.run();
});