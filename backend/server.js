const config = require('./config')
const {
  app: { port },
  db: { username, password, cluster, dbname },
} = config

const mongoose = require('mongoose')
mongoose
  .connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.error("Can't connect database"))

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) // เพื่อรับ parameter จาก Body ได้(req.body)
app.get('/api', function (req, res) {
  res.json('hello API')
})
app.use('/api', require('./route/auth.route'))

app.listen(port, function () {
  console.log(`server running on ${port}`)
}) //the server object listens on port 8080
