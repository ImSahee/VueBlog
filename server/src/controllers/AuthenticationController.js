const {User} = require('../models')

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
        res.status(403). send({
          errr: 'The login information was incorrect!'
        })
      }
      const isPasswordValid =  password === user.password
      if(!isPasswordValid){
        res.status(403). send({
          errr: 'The login information was incorrect!'
        })
      }
      const userJson = user.toJSON()
      res.send(userJson)
    } catch (error) {
      res.status(500).send({
        error: 'Am error has occured trying to log in'
      })
    }
  }
}