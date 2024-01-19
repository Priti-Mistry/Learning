const express = require('express')
const app = express()
const postRouter=require('./routes/Posts')
const commentRouter=require('./routes/Comments')
const userRouter=require('./routes/Users')
const likeRouter=require('./routes/Likes')
// const connection = require('./database')
const cors=require('cors')

app.use(express.json())
app.use(cors())
const db = require("./models")


app.use('/post',postRouter)
app.use('/comments',commentRouter)
app.use('/users',userRouter)
app.use('/likes',likeRouter)


db.sequelize.sync().then(() => {
    app.listen(5000,()=>{
        console.log('hello there')
    })
})


// app.use(express.json())
// app.use('/posts',router)

// app.listen(5000, () => {
//     console.log('server is running')
//     connection.connect(function(err){
//         if(err) throw err;
//         console.log('database connected')
//     })
// })