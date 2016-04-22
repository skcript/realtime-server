var environment = require('./environment.js');
var redis = environment.loadRedis("redis://127.0.0.1:6379/0", "pRejaswu4acruxumebumaprecHabraph");
var io = environment.loadSocketIo(redis);

environment.authorize(io, redis);
