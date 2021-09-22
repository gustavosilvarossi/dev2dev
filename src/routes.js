const { Router } = require('express');
const { ListAllRepositoresByOrg } = require('./controllers/RepositoriesController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send('is On...');
});

routes.get('/repositores/:organization', ListAllRepositoresByOrg);

module.exports = routes;