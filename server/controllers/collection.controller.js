const Card = require('../models/card.model');

module.exports = {
    getCollection: async (req, res) => {
        try {
            const cards = await Card.find(); // or your logic to get opened cards
            res.status(200).json(cards);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
};
