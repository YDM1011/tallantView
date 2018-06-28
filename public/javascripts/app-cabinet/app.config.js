'use strict';
const
    homeTmp = '/javascripts/app-cabinet/profile/profile.view.html';

const config = ($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/profile', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/casting', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/blog', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/selected', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/project', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/wallet', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .when('/suport', {
            templateUrl: homeTmp,
            controller: 'ProfileCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
    $locationProvider.hashPrefix('!');
    // $resourceProvider.defaults.stripTrailingSlashes = false;
}

angular
    .module('Cabinet')
    .config(['$routeProvider', '$locationProvider', config]);

