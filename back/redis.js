const redis = require('redis');

exports.redisClient = redis.createClient({ legacyMode: true });
