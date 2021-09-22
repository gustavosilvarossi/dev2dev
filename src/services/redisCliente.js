const Redis = require('../configs/redis');

const { promisify } = require('util');

async function setValue(key, value) {
    const setAsync = promisify(Redis.set).bind(Redis);
    await setAsync(key, JSON.stringify(value));
}

async function getValue(key) {
    const getAsync = promisify(Redis.get).bind(Redis);
    const result = await getAsync(key);
    return JSON.parse(result);
}

async function setValueWithExpire(key, value, expiration) {
    const setAsyncEx = promisify(Redis.set).bind(Redis);
    await setAsyncEx(key, JSON.stringify(value), 'Ex', expiration);
}

module.exports = { setValue, getValue, setValueWithExpire };