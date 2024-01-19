const express = require('express')
const cors = require('cors');
const db = require('./models')
const { Users } = require("./models")
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parse")
const { sign } = require('jsonwebtoken')


const app = express()
app.use(express.json())
app.use(cors())
// app.use(cookieParser())

app.get('/profile', (req, res) => {
    res.json('proflie')
})

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            email: email,
            password: hash
        }).then(() => {
            res.json({ message: "success" })
        })
            .catch((err) => {
                if (err) {
                    res.status(400).json({
                        error: err
                    })
                }
            })
    })

})

app.post("/signin", async (req, res) => {

    const { email, password } = req.body

    const user = await Users.findOne({ where: { email: email } })
    if (!user) res.status(400).json({ error: "user not exist" });

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({ error: "invalid email and password" })
        } else {
            const accessToken = sign({
                email: user.email, id: user.id
            }, "jwtToken");
            res.json({
                token: accessToken,
                email: email,
                id: user.id
            })
        }
    })
})

// app.get('/login',(req,res)=>{
//     res.render('login.ejs')
// })

// app.get('/register',(req,res)=>{
//     res.render('register.ejs')
// })

const port = 5000
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is runnig on port : " + port)
    })
})