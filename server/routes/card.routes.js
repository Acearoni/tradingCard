const CardController = require('../controllers/card.controller');


module.exports = (app) => {
        //Postman testing routes as well
    app.get('/api/cards', CardController.findAllCards),
    app.post('/api/cards', CardController.createCard),
    app.get('/api/cards/:id', CardController.findOneCard),
    app.put('/api/cards/:id', CardController.updateCard),
    app.delete('/api/cards/:id', CardController.deleteCard)
}