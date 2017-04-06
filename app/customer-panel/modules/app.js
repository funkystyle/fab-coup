angular.module('APP', ['ui.router', 'oc.lazyLoad'])
    .directive("include", [function () {
        return {
            restrict: "E",
            templateUrl: function (ele, attrs) {
                return attrs.path;
            }
        }
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
        // $locationProvider.html5Mode(true).hashPrefix('!');

        // configuring the lazyLoad angularjs files
        $ocLazyLoadProvider.config({
            // debug: true,
            modules: [
                {
                    name: 'headerModule',
                    files: ['modules/header/header.controller.js']
                },
                {
                    name: "ui.bootstrap",
                    files: [
                        'bower_components/angular-bootstrap/ui-bootstrap.min.js', 
                        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
                    ]
                },
                {
                    name: "storeServiceModule",
                    files: ['modules/store/store.service.js']
                },
                {
                    name: 'constantModule',
                    files: ['modules/constants.module.js']
                },
                {
                    name: "footerModule",
                    files: ['modules/footer/footer.controller.js']
                },
                //    Filters
                {
                    name: "Filters",
                    files: ['modules/filters/filter.module.js']
                }
            ]
        });
        
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
            // Store Info
            .state('store-info', {
                url: '/store/:id',
                templateUrl: 'modules/store.info/store.info.template.html',
                controller: "storeinfoController",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'storeinfoModule',
                                files: ['modules/store.info/store.info.controller.js']
                            }
                        )
                    }
                }
            })
            // category info
            .state('category', {
                url: '/category',
                templateUrl: 'modules/category/category.template.html',
                controller: "categoryCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'categoryModule',
                                files: ['modules/category/category.controller.js']
                            }
                        )
                    }
                }
            })
            // category info
            .state('categoryinfo', {
                url: '/category/:id',
                templateUrl: 'modules/category.info/category.info.template.html',
                controller: "categoryinfoCtrl",
                resolve: {
                    home: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'categoryinfoModule',
                                files: ['modules/category.info/category.info.contoller.js']
                            }
                        )
                    }
                }
            })
    }])
