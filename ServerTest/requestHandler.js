var login = require("./login");
var signin = require("./signIn");
var querystring = require("querystring");

var db_function = {};
db_function["login"] = login.login;
db_function["signin"] = signin.signIn;

db = {};
db.login = function logIn(res, data){
    db_func("login", res, data);
};
db.signin = function signIn(res, data){
    db_func("signin", res, data);
};

function db_func(type, res, data){
    var obj = querystring.parse(data);
    console.log(obj)
    db_function[type](obj["id"], function(err,result){
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.write(result);
        res.end();
    });
}

/*function login_func(res, data){
    var obj = querystring.parse(data);
    console.log("request ID : " + obj.data)
    login.login(obj["id"], function(err,result){
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.write(result);
        res.end();
    });
}

function signIn_func(res, data){
    var obj = querystring.parse(data);
    console.log("request ID: " + obj);
    signin.signIn(obj["id"], function(err, result){
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.write(result);
        res.end();
        console.log(result);
    });
}

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/login" method="post">'+
    '<textarea name="id" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}*/

//exports.login_func = login_func;
//exports.start = start;
//exports.signIn_func = signIn_func;
exports.db_func = db;
