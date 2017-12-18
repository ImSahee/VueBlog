const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
/* GET POST PUT PATCH DELETE */
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world!'
  })
})

app.listen(8081)