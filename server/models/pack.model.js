const mongoose = require('mongoose');

const PackSchema = mongoose.Schema({

    //Below is an [Array] of {ObjectIds}
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card"
    }]

}, {timestamps : true});

module.exports = mongoose.model('Pack', PackSchema);