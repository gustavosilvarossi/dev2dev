const { getValue, setValue, setValueWithExpire } = require('../services/redisCliente');

async function cacheMiddleware(req, res, next) {

    const { organization } = req.params;

    const dataInCache = await getValue(organization);

    if (dataInCache) {
        return res.status(200).json(dataInCache);
    }

    res.sendResponse = res.json;

    res.json = async (body) => {
        await setValue(organization, body);
        res.sendResponse(body);
    }

    return next();
}

module.exports = cacheMiddleware;