const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../midlleware/auth')
const Shoping = require('../models/Shoping')
const User = require('../models/User')

//@desc Login
//@router   GET /
router.get('/', ensureGuest, (req, res) =>{
    console.log('login with google account sucsses')
})

//@desc GetAll User
//@router   GET /alluser
router.get('/alluser', ensureAuth, async (req, res) =>{
    try {
        const user = await User.find().lean()
        console.log(user)
    } catch (err) {
        console.error(err)
    }
})

//@desc Create new Shoping
//@router   POST /addshoping
router.post('/addshoping', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Shoping.create(req.body)
    } catch (error) {
        console.error(err)
    }
});

//@desc GET all shoping
//@router   GET /allshoping
router.get('/allshoping', ensureAuth, async (req, res) =>{
    try {
        const shoping = await Shoping.find().lean()
        console.log(shoping)
    } catch (err) {
        console.error(err)
    }
});

//@desc GET shoping by id
//@router   GET /shoping_id
router.get('/shoping_id', ensureAuth, async (req, res) =>{
    try {
        const shoping = await Shoping.findById(req.params.id).lean()
        console.log(shoping)
    } catch (err) {
        console.error(err)
    }
});

module.exports = router;