const { Router } = require('express');
const { ListAllRepositoresByOrg } = require('./controllers/RepositoriesController');
const CacheMiddleware = require('./middlewares/CacheMiddleware')

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send('is On...');
});

routes.get('/repositores/:organization', CacheMiddleware, ListAllRepositoresByOrg);

module.exports = routes;