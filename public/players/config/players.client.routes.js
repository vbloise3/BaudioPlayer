/**
 * Created by vbloise3 on 1/2/16.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('players').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'players/views/players.client.view.main.html'
        }).
        when('/yo', {
            templateUrl: 'players/views/players.client.view.main2.html'
        }).
        when('/sounds', {
            templateUrl: 'players/views/players.client.view.sounds.html'
        }).
        when('/players/create', {
            templateUrl: 'players/views/create-player.client.view.html'
        }).
        when('/players', {
            templateUrl: 'players/views/list-players.client.view.html'
        }).
        when('/players/:playerId', {
            templateUrl: 'players/views/view-player.client.view.html'
        }).
        when('/players/:playerId/edit', {
            templateUrl: 'players/views/edit-player.client.view.html'
        }).
        when('/players/:playerId/playSound', {
            templateUrl: 'players/views/play-sound.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);