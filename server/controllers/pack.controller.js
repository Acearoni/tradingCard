const Collection = require('../models/collection.model');
const Pack = require('../models/pack.model');

module.exports = {
    openPack: async (req, res) => {
        try {
            const pack = await Pack.findById(req.params.id).populate("cards");

            if (!pack) {
                return res.status(404).json({ message: "Pack not found" });
            }

            const cards = pack.cards;

            const collection = await Collection.findOne();
            if (!collection) {
                collection = await Collection.create({ cards: cards.map(card => card._id) });
            } else {
                collection.cards.push(...cards.map(card => card._id));
                await collection.save();
            }

            await Pack.deleteOne({ _id: req.params.id });

            res.status(200).json({ message: "Pack opened", cards });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllPacks: async (req, res) => {
        try {
            const packs = await Pack.find().populate("cards");
            res.status(200).json(packs);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
