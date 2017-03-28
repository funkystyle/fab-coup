angular.module('APP', ['ui.router', 'oc.lazyLoad'])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/home/home.template.html',
                controller: "homeCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'homeModule',
                                files: ['modules/home/home.controller.js']
                            }
                        )
                    }
                }
            })
    }])
