var queryString = require('querystring')

function home(res){
    console.log("executing 'home' function")
    var html='<html>'+
        '<head><title>HomePage</title></head>'+
        '<body>'+
         '   <form action="/review" method="post">'+
          ' <input type="text"'+
           '    name="review"'+
            '/>'+
            '<input type="submit" value="submit"/>'+
            '</form>'+
        '</body>'+
    '</html>'
    res.writeHead(200,{"Content-Typee":"text/html"})
    res.write(html)
    res.end()

}
function review(res,reviewData){
    console.log("executing 'review' function " , queryString.parse(reviewData).review)
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("your Review : "+queryString.parse(reviewData).review)
    res.end()
}
exports.home=home
exports.review=review