angular.module('APP', ['ui.router', 'oc.lazyLoad'])
    .run(["$rootScope", function($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
            $locationProvider.html5Mode(false).hashPrefix('');

            // configuring the lazyLoad angularjs files
            $ocLazyLoadProvider.config({
                // debug: true,
                modules: [{
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
                        name: "satellizer",
                        files: [
                            'bower_components/satellizer/dist/satellizer.js'
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

            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'modules/header/header.template.html',
                    controller: "headerCtrl",
                    resolve: {
                        redirect: function($location) {
                            if ($location.path() == undefined || $location.path() == null || $location.path() == '') {
                                $location.path('/');
                            }
                        },
                        main: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'headerModule',
                                files: ['modules/header/header.controller.js']
                            })
                        }
                    }
                })
                .state('main.home', {
                    url: '/',
                    templateUrl: 'modules/home/home.template.html',
                    controller: "homeCtrl",
                    resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'homeModule',
                                files: ['modules/home/home.controller.js']
                            })
                        }
                    }
                })
                .state('main.login', {
                    url: '/login',
                    templateUrl: 'modules/login/login.template.html',
                    controller: "loginCtrl",
                    resolve: {
                        checkLogin: function (auth, $location) {
                            if(auth.checkLogin()) {
                                $location.path('/');
                            }
                        },
                        authentication: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'loginModule',
                                files: ['modules/login/login.module.js']
                            })
                        }
                    }
                })
                .state('main.forgot_password', {
                    url: '/forgot-password',
                    templateUrl: 'modules/forgot.password/forgot.password.template.html',
                    controller: "forgotPasswordCtrl",
                    resolve: {
                        forgotPassword: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'forgotPasswordModule',
                                files: ['modules/forgot.password/forgot.password.module.js']
                            })
                        }
                    }
                })

                // activate email link
                .state('main.activate', {
                    url: '/email/activate/:user_id/confirm/:token',
                    templateUrl: 'modules/activate.email/activate.email.template.html',
                    controller: "activateEmailCtrl",
                    resolve: {
                        activateEmail: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'activateEmailModule',
                                files: ['modules/activate.email/activate.email.module.js']
                            })
                        }
                    }
                })
                //  change password
                .state('main.change_password', {
                    url: '/change-password',
                    templateUrl: 'modules/change.password/change.password.template.html',
                    controller: "changePasswordCtrl",
                    resolve: {
                        changePassword: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'changePasswordModule',
                                files: ['modules/change.password/change.password.module.js']
                            })
                        }
                    }
                })
                // store state
                .state('main.store', {
                    url: '/stores',
                    templateUrl: 'modules/store/store.template.html',
                    controller: "storeCtrl",
                    resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'storeModule',
                                files: ['modules/store/store.controller.js']
                            })
                        }
                    }
                })
                // Store Info
                .state('main.store-info', {
                    url: '/store/:id',
                    templateUrl: 'modules/store.info/store.info.template.html',
                    controller: "storeinfoController",
                    resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'storeinfoModule',
                                files: ['modules/store.info/store.info.controller.js']
                            })
                        }
                    }
                })
                // category info
                .state('main.category', {
                    url: '/category',
                    templateUrl: 'modules/category/category.template.html',
                    controller: "categoryCtrl",
                    resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'categoryModule',
                                files: ['modules/category/category.controller.js']
                            })
                        }
                    }
                })
                // category info
                .state('main.categoryinfo', {
                    url: '/category/:id',
                    templateUrl: 'modules/category.info/category.info.template.html',
                    controller: "categoryinfoCtrl",
                    resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'categoryinfoModule',
                                files: ['modules/category.info/category.info.contoller.js']
                            })
                        }
                    }
                })
                // Dashboard
                .state('main.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'modules/dashboard/dashboard.template.html',
                    controller: "dashboardCtrl",
                    resolve: {
                        checkLogin: function (auth, $location) {
                            if(!auth.checkLogin()) {
                                $location.path('/login');
                            }
                        },
                        dashboard: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'dashboardModule',
                                files: ['modules/dashboard/dashboard.controller.js']
                            })
                        }
                    }
                })
                // 404
                .state('404', {
                    url: '/404',
                    templateUrl: 'modules/404/404.template.html'
                })
                // blog.category
                .state('blog_category', {
                    url: '/blog/category',
                    templateUrl: 'modules/blog.category/blog.category.template.html'
                })
                // blog.post
                .state('blog_post', {
                    url: '/blog/post',
                    templateUrl: 'modules/blog.post/blog.post.template.html'
                })
                //fab.deal.post
                 .state('fab_deal_post', {
                    url: '/fab-deal-post',
                    templateUrl: 'modules/fab.deal.post/fab.deal.post.template.html'
                })
        }
    ])
    // it is for authentication
    .factory('auth', function ($http, $q) {
        return {
            getToken: function () {
                return localStorage.getItem('token');
            },
            setToken: function (token) {
                return localStorage.setItem('token', token);
            },
            logout: function () {
                localStorage.removeItem('token');
            },
            checkLogin: function () {
                return (localStorage.getItem('token')) ? true : false;
            },
            me: function () {
                var def = $q.defer();
                $http({
                    url: "http://54.213.22.144/api/1.0/auth/me",
                    method: "GET"
                }).then(function (data) {
                    def.resolve(data.data);
                }, function (error) {
                    def.reject(error.data);
                });

                return def.promise;
            }
        }
    });