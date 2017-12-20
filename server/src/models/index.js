const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

config.db.options.operatorsAliases = Sequelize.Op // removes sequelize deprecated String based operators are now deprecated. TODO - need to get this to work without that line

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  });
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db