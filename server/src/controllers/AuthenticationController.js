const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body)
      res.send({
        message: `Hello ${req.body.email}! Your user was registred! Have fun!`
      })
    } catch (error) {
      res.status(400).send({
        error: 'This email accond is already in use.'
      })
    }
    
  }
}