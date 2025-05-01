const CollectionController = require('../controllers/collection.controller');

module.exports = app => {
    app.get('/api/collection', CollectionController.getCollection);
};
