angular.module('app', ['ngCookies'])
    .config(function($controllerProvider, $cookiesProvider) {
        $controllerProvider.allowGlobals();
        $cookiesProvider.defaults.path = '/';
    })
    .run(function(version, $rootScope) {
        $rootScope.version = version;
    });
