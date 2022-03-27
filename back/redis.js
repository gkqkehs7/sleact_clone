const redis = require('redis');
const connectRedis = require('connect-redis');

exports.redisClient = redis.createClient();
exports.RedisStore = connectRedis(session);
