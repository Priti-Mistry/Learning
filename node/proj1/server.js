var http = require('http')
var url = require('url')

function serverStart(route, handle) {
    function onReq(req, res) {
        var reviewData = "";

        var pathname = url.parse(req.url).pathname
        console.log('req received for ' + pathname)
        req.setEncoding('utf8')
        req.addListener("data", function (chunk) {
            reviewData += chunk
        })

        req.addListener("end", function () {
            console.log('.../...' + reviewData)
            route(handle, pathname, res, reviewData)
        })

    }

    http.createServer(onReq).listen(5000)
    console.log('server stared on port 5000')
}
exports.serverStart = serverStart