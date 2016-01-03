/**
 * Created by vbloise3 on 1/2/16.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'PlayerSchema'
var PlayerSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Player', PlayerSchema);