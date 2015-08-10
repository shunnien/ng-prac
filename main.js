angular.module('app', ['ngCookies'])
    .config(function($controllerProvider, $cookiesProvider, $starProvider) {
        $controllerProvider.allowGlobals();
        $cookiesProvider.defaults.path = '/';
        $starProvider.defaults.name = "Allen";
    })
    .run(function(version, $rootScope) {
        $rootScope.version = version;
        $rootScope.name = "Allen";
    })
    .provider('$star', [function() {
        var vm = this;
        vm.defaults = {};

        this.$get = [function() {
            return {
                'name': vm.defaults.name
            };
        }];
    }]);

function getVersion(btn) {
    var $injector = angular.element(btn).injector();
    var version = $injector.get('version');
    alert(version);
}

function getPName(btn) {
    var $scope = angular.element(btn).scope();
    alert($scope.m.PName);
    $scope.m.PName += "!";
    $scope.$apply();
}
