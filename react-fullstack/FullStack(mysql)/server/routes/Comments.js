const express=require('express')
const router=express.Router()
const {Comments}=require('../models')
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get('/Id/:id',async(req,res)=>{
    const id=req.params.id;
    const comments=await Comments.findAll({where : {PostId:id}})
    res.json(comments)
})

router.post('/',validateToken,async(req,res)=>{
    const data=req.body
    const username=req.user.username
    data.username=username
    await Comments.create(data)
    res.json(data)
})

router.delete('/:commentId',validateToken, async(req,res)=>{
    const commentId = req.params.commentId

    await Comments.destroy({
        where:{
            id:commentId
        }
    }).then(
        res.json("deleted successfully.")
    )
})

module.exports=router