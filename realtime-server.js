var environment = require('./environment.js');
var redis = environment.loadRedis("redis://52.38.93.173:6379/0", "frumE5rEtHePhusPuCrUtezewu");
var io = environment.loadSocketIo(redis);

environment.authorize(io, redis);