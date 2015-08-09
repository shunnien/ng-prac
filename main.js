angular.module('app', ['ngCookies'])
    .config(function($controllerProvider, $cookiesProvider) {
        $controllerProvider.allowGlobals();
        $cookiesProvider.defaults.path = '/';
    })
    .run(function(version, $rootScope) {
        $rootScope.version = version;
        $rootScope.name = "Allen";
    });

function getVersion(btn) {
    var $injector = angular.element(btn).injector();
    var version = $injector.get('version');
    alert(version);
}
