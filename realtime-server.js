var environment = require('./environment.js');
var redis = environment.loadRedis("redis://127.0.0.1:6379/0", "5321fa04918d32c4bb939a5fc313df21946a344fa58006615e936b4382a1a3bd");
var io = environment.loadSocketIo(redis);

environment.authorize(io, redis);
