var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require("querystring");

function start(route, handle){
    function onReq(req, res){
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        var data = url.parse(req.url).query;
        console.log("Request for " + pathname + " received.");

        req.setEncoding("utf8");

        req.addListener("connect", function(){
            console.log("connected");
        });
        req.on("data", function (postDataChunk){
            postData += postDataChunk;
            console.log(postDataChunk);
        });

        req.on("end", function(){
            route(handle, pathname, res, postData);
        });

    }
    server = http.createServer(onReq).listen(8000);
    console.log("Server On");
    //console.log(util.inspect(server.listeners("connect")));
}
exports.start = start;
