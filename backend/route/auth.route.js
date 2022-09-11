const express = require('express')
const router = express.Router()
const { signup, list } = require('../controller/auth.controller')
// validators
const { runValidation } = require('../validator')
const { userSignupValidator, userSigninValidator } = require('../validator/auth.validator')

router.post('/signup', userSignupValidator, runValidation, signup) //ต้องเอา userSignupValidator เป็น middleware เเรกเสมอ

router.get('/auth', list)

module.exports = router
