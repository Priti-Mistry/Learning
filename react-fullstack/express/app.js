const express=require('express')
const router=require('./routes/users')

const app=express()
const port =5000

// app.use(logger)

app.set('view engine','ejs')

app.get('/',logger,(req,res)=>{
    // res.status(500).json({msg:"error"})
    // res.download('app.js')
    res.render("index", { text1:"there!!"})
})

app.use('/users',router)

function logger(req,res,next){
    console.log(req.originalUrl)
}

app.listen(port,()=>{
    console.log('server is running on port : '+port);
})