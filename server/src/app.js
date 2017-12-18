const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `Hello ${req.body.email}!Your user was registred! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)