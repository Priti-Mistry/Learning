const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('users list')
})
router.get('/new', (req, res) => {
    res.send('new user')
})
// router.get('/:id', (req, res) => {
//     res.send(`get user with id : ${req.params.id}`)
// })
const users = [
    {
        name: "kyle"
    }, {
        name: "sally"
    }
]
router.param("id", (req, res, next, id) => {
    console.log(id)
    req.user = users[id]
    console.log(req.user)
    next()
})
router.route("/:id")
    .get((req, res) => {
        console.log("user : " + req.user.name)
        res.send(`get user with id : ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`post user with id : ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`post user with id : ${req.params.id}`)
    })


module.exports = router