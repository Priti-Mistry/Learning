var server=require('./server')
var route=require('./router')
var handler=require('./handler')

var handle ={}
handle['/']=handler.home;
handle['/home']=handler.home;
handle['/review']=handler.review;

server.serverStart(route.route , handle)