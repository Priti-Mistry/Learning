const express=require('express')
const router=express.Router()
const bcrypt = require("bcrypt")
const {Users}=require('../models')
const {sign} = require('jsonwebtoken')
const {validateToken} =require('../middlewares/AuthMiddleware')

// router.get("/",async(req,res)=>{
//     const listUsers = await Users.findAll() 
//     console.log("from get")
//     res.json(listUsers)
// })

// router.get("/Id/:id",async(req,res)=>{
//     const id =req.params.id;
//     const data = await Users.findByPk(id)
//     console.log(data)
//     res.json(data)
// })

router.post('/',(req,res)=>{
    const {username, password} = req.body    
    bcrypt.hash(password,10).then((hash)=>{
        Users.create({username:username,password:hash});
    }).then(()=>{
        res.json({"message":"user added"});
    }).catch((error)=>{
        res.send(error.message)
        console.log("error : "+error.message)
    })
})

router.post("/login",async(req,res)=>{
    const{username,password}=req.body
    const user=await Users.findOne({
        where : {username:username}
    })
    if(!user) res.json({error: "user does not exist"})

    bcrypt.compare(password,user.password).then((match)=>{
        if(!match) res.json({error:"Invalid username and password"});


        const accessToken=sign({username : user.username, id:user.id},"impSecret")

        res.json(
            {
                token :accessToken,
                username:username,
                id:user.id
            }
        )
    })
})
router.get("/auth",validateToken,(req,res)=>{
    res.json(req.user)
})

router.get("/info/:id",async(req,res)=>{
    const  id=req.params.id
    const info = await Users.findByPk(id,{
        attributes:{
            exclude:["password"]
        }
    })
    res.json(info)
})
module.exports = router