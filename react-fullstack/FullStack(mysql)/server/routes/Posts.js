// const { application } = require('express')
const express = require('express')
const router = express.Router()
// var connection = require('../database')
const { Posts, Likes } = require('../models')
const {validateToken}=require("../middlewares/AuthMiddleware")

// router.get('/',(req,res)=>{
//     let sql="select * from users"
//     connection.query(sql,function(err,results){
//         if(err) throw err
//         else
//         res.send(results)

//     })
// })

router.get("/", validateToken ,async (req, res) => {
    const listPosts = await Posts.findAll({ include: [Likes] });
    const likedPosts=await Likes.findAll({where :{UserId:req.user.id}})
    // console.log("from get :")
    res.json({listPosts:listPosts,likedPosts:likedPosts})
})

router.get("/Id/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Posts.findByPk(id)
    console.log(data)
    res.json(data)
})
router.get("/user/:id", async (req, res) => {
    const id = req.params.id;
    const listOfPosts = await Posts.findAll( {
        where:{UserId:id},
        include:[Likes]
    })
    console.log(listOfPosts)
    res.json(listOfPosts)
})

router.post('/', validateToken , async (req, res) => {
    const post = req.body;
    post.username=req.user.username
    post.UserId=req.user.id

    await Posts.create(post);
    res.json(post);
})
router.delete("/:postId",validateToken,async(req,res)=>{
    const postId=req.params.postId
    await Posts.destroy({
        where:{
            id:postId
        }
    }).then(
        res.json("deleted successfully.")
    )
})
module.exports = router