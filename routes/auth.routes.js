const router = require("express").Router();
const bcrypt = require('bcryptjs');
const res = require("express/lib/response");

const User = require('../models/User.model');

const saltRounds = 10

router.get('/signup', (_, res) => {
    res.render('auth/signup')
})
router.post('/signup', (req, res) => {
    const { username, password, email } = req.body
})

try {
    const salt = await.bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password.salt);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    res.redirect('/user-profile')
} catch (error) {
    console.log(error)
}

router.get('/user-profile', (_, res) => {
    res.render('auth/user-profile')
})

module.exports = router;