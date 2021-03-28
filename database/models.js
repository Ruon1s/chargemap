const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// make schemas for all datatypes in mongo

const stationSchema = new Schema({
    username: String,
});

const catSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 0
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    color: String,
    weight: {
        type: Number
    }
});

module.exports = {catSchema, userSchema};
