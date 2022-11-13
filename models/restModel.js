const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
  name: {
    type: String,
    require: [true, 'A restaurant must have a name'],
  },
  name_en: String,
  category: String,
  image: String,
  location: {
    type: String,
    require: [true, 'A restaurant must have an location'],
  },
  phone: {
    type: String,
    require: [true, 'A restaurant must have a phone number'],
  },
  google_map: String,
  rating: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  description: String
})


module.exports = mongoose.model('Restaurants', restSchema)