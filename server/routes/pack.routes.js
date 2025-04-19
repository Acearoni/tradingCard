const PackController = require('../controllers/pack.controller');

module.exports = (app) => {
    app.get('/api/openPack/:id', PackController.openPack);
    app.get('/api/allPacks', PackController.getAllPacks);
};
