angular.module("ADMIN", ['ui.router', 'oc.lazyLoad'])
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        templateUrl: 'modules/dashboard/dashboard.template.html',
    })
}])