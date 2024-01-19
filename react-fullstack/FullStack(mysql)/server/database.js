var mysql=require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    database:'demoDB',
    user:'root',
    password:''
})
module.exports=connection