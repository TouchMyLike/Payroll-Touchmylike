const shortId = require('shortid')
const db = require('../model')
const User = db.user

exports.signup = (req, res) => {
  console.log(req.body.email)
  // หา email ใน document
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'Email is taken',
      })
    }

    if (err) {
      console.log('SIGNUP ERROR ', err) // see server console for error
      return res.status(400).json({
        // dont send error object
        // error: err
        error: 'Could not signup user',
      })
    }

    const { name, email, password } = req.body
    let username = shortId.generate() // เช่น xkykny6lr เป็น username
    let profile = `${process.env.CLIENT_URL}/profile/${username}` // http://localhost:3000/profile/XkYKNy6lr

    let newUser = new User({ name, email, password, profile, username })
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        })
      }
      res.json({
        message: 'Signup success! Please signin.',
      })
    })
  })
}

exports.list = (req, res) => {
  res.json({ message: 'api at Auth' })
}
