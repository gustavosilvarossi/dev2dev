const { Router } = require('express');
const RepositoriesController = require('./controllers/RepositoriesController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send('is On...');
});

routes.get('/repositores/:organization', RepositoriesController.ListAllRepositoresByOrg);

module.exports = routes;