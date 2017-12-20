const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send(userJson)
    } catch (error) {
      res.status(400).send({
        error: 'This email accond is already in use.'
      })
    }
  },
  async login (req, res) {
    try{
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if(!user){
        return res.status(401).send({
          error: 'The login information was incorrect!'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid){
        return res.status(401).send({
          error: 'The login information was incorrect!'
        })
      }
      // {"id":5,"email":"sahee@o2.pl","password":"hesoyam123","updatedAt":"2017-12-20T21:05:39.737Z","createdAt":"2017-12-20T21:05:39.737Z"}
      const userJson = user.toJSON()
      
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      return res.status(500).send({
        error: 'Am error has occured trying to log in. ' + error
      })
    }
  }
}