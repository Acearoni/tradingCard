const Card = require('../models/card.model')
const Pack = require('../models/pack.model')

//export object with functions
module.exports = {
    //Key Name
    findAllCards: (req, res) => {
        Card.find()
            .then((allCards) => {
                res.status(200).json(allCards)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //Create
    createCard: async (req, res) => {
        try {
            const newCard = await Card.create(req.body) //Creates the new card

            let pack = await Pack.findOne({ $where: 'this.cards.length < 4'});//Look for a pack with less than 4 cards

            if(pack){
                pack.cards.push(newCard._id);
                await pack.save();
            } else {
                pack = await Pack.create({cards: [newCard._id]});
            }

            res.status(200).json({card: newCard, pack});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //FindOne
    findOneCard: (req, res) => {
        Card.findOne({ _id: req.params.id })
            .then((oneCard) => {
                res.status(200).json(oneCard)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updateCard: (req, res) => {
        Card.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedCard) => {
                res.status(200).json(updatedCard)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    deleteCard:  async (req, res) => {
        try {
            // Delete the card
            const result = await Card.deleteOne({ _id: req.params.id });
    
            // Remove the card from any packs it's in
            await Pack.updateMany(
                { cards: req.params.id },
                { $pull: { cards: req.params.id } }
            );
    
            res.status(200).json({ message: "Card deleted and removed from packs", result });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }

}