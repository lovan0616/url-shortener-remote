const mongoose = require('mongoose')

const Schema = mongoose.Schema
const linkSchema = new Schema({
  url:{
    type: String,
    required: true
  },
  scram:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Link', linkSchema)