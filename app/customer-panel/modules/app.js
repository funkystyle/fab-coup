angular.module('APP', ['ui.router', 'oc.lazyLoad'])
    .config(['$locationProvider', function ($locationProvider) {
        // $locationProvider.html5Mode(true).hashPrefix('!');
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
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/login.template.html',
                controller: "loginCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'loginModule',
                                files: ['modules/login/login.controller.js']
                            }
                        )
                    }
                }
            })
            // store state
            .state('store', {
                url: '/store',
                templateUrl: 'modules/store/store.template.html',
                controller: "storeCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'storeModule',
                                files: ['modules/store/store.controller.js']
                            }
                        )
                    }
                }
            })
    }])
