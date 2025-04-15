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

    deleteCard: (req, res) => {
        Card.deleteOne({_id: req.params.id})
            //Result will just be the system saying the count of deleted amount.
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json({err})
            })
    }

}