const mongoose = require('mongoose');

const CollectionSchema = mongoose.Schema({
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Collection', CollectionSchema);

