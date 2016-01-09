/**
 * Created by vbloise3 on 1/2/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var players = require('../../app/controllers/players.server.controller');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'players' base routes
    app.route('/api/players')
        .get(players.list)
        .post(players.create);

    // Set up the 'players' parameterized routes
    app.route('/api/players/:playerId')
        .get(players.read)
        .put(players.update)
        .delete(players.delete);

    app.route('/api/playSound/:playSoundId')
        .get(players.playSound);

    app.route('/api/testREST')
        .get(players.testREST);

    // Set up the 'playerId' parameter middleware
    app.param('playerId', players.playerByID);

    //playSound middleware
    app.param('playSoundId', players.playSoundInit);
};