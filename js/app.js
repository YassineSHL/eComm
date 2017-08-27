'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._;
});

var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'angularModalService', 'underscore', 'ngMessages']);

myApp
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('public', {
                abstract: true,
                url: '/',
                template: '<ui-view/>'
            })
            .state('public.home', {
                url: 'home',
                templateUrl: 'views/front/home.html'
            })
            .state('public.news', {
                url: 'news',
                templateUrl: 'views/front/news.html'
            })
            .state('public.gadgets', {
                url: 'gadgets',
                templateUrl: 'views/front/gadgets.html'
            })
            .state('public.other', {
                url: 'other',
                templateUrl: 'views/front/other.html'
            })
            .state('public.accessories', {
                url: 'accessories',
                templateUrl: 'views/front/accessories.html',
            })
            .state('public.contact', {
                url: 'contact',
                templateUrl: 'views/front/contact.html',
            })
    })
    .run(function($rootScope, $location, $state, $stateParams, $transitions) {
        console.log('run');
    });