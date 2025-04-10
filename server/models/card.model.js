const mongoose = require('mongoose');

//const Name of Schema = mongoose.Schema Fucntion() and pass an object into it.
const CardSchema = mongoose.Schema({
    cardName: {
        type: String,
        required: [true, "Must provide a name."],
        minLength: [3, "Name must be at least 3 characters long."],
        maxLength: [20, "Name is too long!"]
    },
    hometown: {
        type: String,
        required: [true, "Must provide a hometown."],
        minLength: [3, "Town name must be at least 3 characters long."],
        maxLength: [15, "Town name must not be longer than 15 characters."]
    },
    weight:{
        type: Number,
        required: [true, "Must provide a weight."],
        min: [100, "Weight must be at least 100."],
        max: [500, "Weight may not surpass 500."]
    },
    finisher: {
        type: String,
        required: [true, "Must provide a finisher."],
        minLength: [5, "Finisher's name must be at least 5 characters long."],
        maxLength: [10, "Finisher's name may not exceed 10 characters long."]
    }
}, { timestamps: true })

//name of Model, Schema its named after
module.exports = mongoose.model('Card', CardSchema)