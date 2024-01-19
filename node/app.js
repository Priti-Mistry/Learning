// function  p(param){
//     console.log(param)
// }

// p('hellow')



// mainFun(p,'World')

// function mainFun(fun,value){
//     fun(value)
// }
// mainFun(function(s){console.log(s)},'hello')
// console.log(__filename)
// console.log(__dirname)
// setTimeout(()=>console.log('hello'),3000)
// setInterval(()=>console.log('hello'),1000)

// var module = require('./file1')
// module.r1()
// module.r2()

//events

// var events=require('events')
// var eventEmitter=new events.EventEmitter()
//  var ringbell=function(){
//      console.log('ring ring ring')
//  }

//  eventEmitter.on('dooropen',ringbell)
//  eventEmitter.on('bellRings',function(msg){
//     console.log(msg)
// })
//  eventEmitter.emit('dooropen')


//  eventEmitter.emit('bellRings','welcome')
//--------------------
//fs module
// var fs= require('fs')
// fs.readFile('text.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("async data : "+data)
//     }
// })

// var data = fs.readFileSync('text.txt')
// console.log('sync : '+data)

//fs stream
// var fs=require('fs')

// var readableStream = fs.createReadStream('text.txt')
// var data='data : '
// readableStream.setEncoding("UTF8")
// readableStream.on('data',function(chunk){
//     data+=chunk;
//     data+=(' - ')
// })
// readableStream.on('end',function(){
//     console.log(data)
// })

// var Wdata='hello there!!!'
// var writeableStream = fs.createWriteStream('output.txt')
// writeableStream.write(Wdata,'UTF8')
// writeableStream.end()
// writeableStream.on('finish',function(){
//     console.log('write Completed')
// })
//-------------------

//pipes
var fs=require('fs')
var readableStream=fs.createReadStream('text .txt')
var writeableStream=fs.createWriteStream('out.txt')
readableStream.pipe(writeableStream)