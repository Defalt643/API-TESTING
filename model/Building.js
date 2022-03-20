const mongoose = require('mongoose')
const { Schema } = mongoose
const buildingSchema = Schema({
  name: { type: String, unique: true },
  level: Number
})
module.exports = mongoose.model('Building', buildingSchema)
