
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , promise = require('./routes/promise')
  , http = require('http')
  , path = require('path')
  , less = require('less');

var app = express();
var compass = require('node-compass');

app.configure(function(){
  app.set('port', process.env.PORT || 8080);//定义端口
  app.set('views', __dirname + '/views');//定义模板的位置
  app.set('view engine', 'jade');//定义模板类型  也可以用ejs
  app.use(express.favicon(__dirname + '/public/favicon.ico'));//定义favicon icon
  app.use(express.logger('dev'));//定义日志输出级别
  app.use(express.bodyParser());//定义数据解析器
  app.use(express.methodOverride());//定义数据解析器
  app.use(app.router);//匹配路径和路由
  app.use(express.static(path.join(__dirname, 'public')));//定义静态文件目录
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/promise/:id',promise.promise);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
