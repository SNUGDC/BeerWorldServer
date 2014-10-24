var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {}
handle["/login"] = requestHandler.db_func.login;
//handle["/start"] = requestHandler.start;
handle["/signin"] = requestHandler.db_func.signin;

server.start(router.route, handle);
