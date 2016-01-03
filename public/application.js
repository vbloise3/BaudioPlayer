/**
 * Created by vbloise3 on 1/2/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'baudio';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'players', 'presentationDirectives']);

// Configure the hashbang URLs using the $locationProvider services
mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);


//stop IE ajax request caching
mainApplicationModule.config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);
//end stop IE ajax request caching

//fix url slashes
mainApplicationModule.config(['$resourceProvider', function($resourceProvider){
    //Don't strip trailing slashes from calculated urls
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// Fix Facebook's OAuth bug
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});