/**
 * Created by vbloise3 on 1/2/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('players').factory('Players', ['$resource', function($resource) {
    // Use the '$resource' service to return a players '$resource' object
    return $resource('api/players/:playerId', {
        playerId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('players').factory('PlaySound', ['$resource', function($resource) {
    return $resource('api/playSound/:playSoundId', {
        playSoundId: '@playSoundId'
    });
}]);