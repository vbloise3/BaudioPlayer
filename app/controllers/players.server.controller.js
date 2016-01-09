/**
 * Created by vbloise3 on 1/2/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Player = mongoose.model('Player');

// Create a new error handling controller method
var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.playSound = function(req, res) {
    //jsut retun player for now
    console.log("--- in playSound! " + req.id + " --");
    var returnPlayer = {
        playerId: req.id
    };
    res.json(returnPlayer);
};

exports.playSoundInit = function(req, res, next, id) {
    //jsut retun player for now
    console.log("--- in playSoundInit!" + id + " --");
    req.id = id;
    next();
};

exports.testREST = function(req, res) {
    console.log("in testREST");
    res.json({"test":"REST"});
};

// Create a new controller method that creates new players
exports.create = function(req, res) {
    // Create a new player object
    var player = new Player(req.body);

    // Set the player's 'creator' property
    player.creator = req.user;

    // Try saving the player
    player.save(function(err) {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the player
            res.json(player);
        }
    });
};

// Create a new controller method that retrieves a list of players
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of players
    Player.find().sort('-created').exec(function(err, players) {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the player
            res.json(players);
        }
    });
};

// Create a new controller method that returns an existing player
exports.read = function(req, res) {
    res.json(req.player);
};

// Create a new controller method that updates an existing player
exports.update = function(req, res) {
    // Get the player from the 'request' object
    var player = req.player;

    // Update the player fields
    player.title = req.body.title;
    player.content = req.body.content;

    // Try saving the updated player
    player.save(function(err) {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the player
            res.json(player);
        }
    });
};

// Create a new controller method that delete an existing player
exports.delete = function(req, res) {
    // Get the player from the 'request' object
    var player = req.player;

    // Use the model 'remove' method to delete the player
    player.remove(function(err) {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the player
            res.json(player);
        }
    });
};

// Create a new controller middleware that retrieves a single existing article
exports.playerByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single player
    Player.findById(id).exec(function(err, player) {
        if (err) return next(err);
        if (!player) return next(new Error('Failed to load player ' + id));

        // If a player is found use the 'request' object to pass it to the next middleware
        req.player = player;

        // Call the next middleware
        next();
    });
};

// Create a new controller middleware that is used to authorize an article operation
/*exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the article send the appropriate error message
    if (req.article.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};*/