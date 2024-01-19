function route(handle,pathname,res,reviewData){
    console.log('routing a request for : '+pathname)
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res,reviewData)
    }else{
        console.log('no handler for '+pathname)
        res.writeHead(404,{"Content-Typee":"text/plain"})
        res.write('error 404, page not found')
        res.end()
    }
}

exports.route=route