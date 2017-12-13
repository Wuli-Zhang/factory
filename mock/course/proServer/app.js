//引入express
//var express = require("express");
//生成实例
//var app = express();
var app = require("express")();
var https = require("https");

var md = require("./md.js");
//设定路由
app.get("/",(req,res) => {
	res.send("hello world");
})
//结局跨域
app.get("*",(req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
// var eleoption = {
//   hostname: 'mainsite-restapi.ele.me',
//   port: 443,//如果是https协议均为443，如果为http协议，此值为80
//   path: '/shopping/v3/hot_search_words?latitude=34.7738559&longitude=113.6699815',
//   method: 'GET'
// };
//https://ju.taobao.com/json/tg/ajaxGetItemsV2.json?callback=define&page=1&psize=20&type=0&frontCatId=
var banneroption = {
  hostname: 'ju.taobao.com',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/json/tg/ajaxGetItemsV2.json?callback=define&page=1&psize=20&type=0&frontCatId=',
  method: 'GET'
};
// var listoption = {
//   hostname: 'mainsite-restapi.ele.me',
//   port: 443,//如果是https协议均为443，如果为http协议，此值为80
//   path: '/shopping/restaurants?latitude=34.77204&longitude=113.67599&offset=0&limit=20&extras[]=activities&terminal=h5',
//   method: 'GET'
// };

// app.get("/elelist",(req,res) => {
// 	md.connect(eleoption,res);
	
// })
app.get("/bannerlist",(req,res) => {
	md.connect(banneroption,res);
	
})
// app.get("/list",(req,res) => {
// 	md.connect(listoption,res);
	
// })
//监听端口
app.listen(3000,() => {
	console.log("your server is running at http://localhost:3000");
})
