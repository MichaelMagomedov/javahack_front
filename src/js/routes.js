angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $urlRouterProvider.otherwise('/list');
        $ocLazyLoadProvider.config({debug: true});
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'views/common/layouts/full.html',
                resolve: {
                    loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load CSS files
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Flags',
                            files: ['node_modules/flag-icon-css/css/flag-icon.min.css']
                        }, {
                            serie: true,
                            name: 'Font Awesome',
                            files: ['node_modules/font-awesome/css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
                        }]);
                    }],
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: [
                                'node_modules/chart.js/dist/Chart.min.js',
                                'node_modules/angular-chart.js/dist/angular-chart.min.js'
                            ]
                        }]);
                    }],
                }
            })
            .state('app.list', {
                url: '/list',
                templateUrl: 'views/list.html',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['js/controllers/list.js']
                        });
                    }]
                }
            })
            .state('app.item', {
                url: '/list/item',
                templateUrl: 'views/item.html',
                params: {
                    item: null
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['js/controllers/item.js']
                        });
                    }]
                }
            })
    }]);
