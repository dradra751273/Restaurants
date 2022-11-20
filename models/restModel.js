const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
  name: {
    type: String,
    require: [true, 'A restaurant must have a name'],
  },
  name_en: {
    type: String,
    require: [true, 'A restaurant must have an english name'],
  },
  category: {
    type: String,
    require: [true, 'A restaurant must be classified'],
  },
  image: {
    type: String,
    require: [true, 'A restaurant must have an image']
  },
  location: {
    type: String,
    require: [true, 'A restaurant must have a location'],
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
    require: true
  },
  description: String
})


module.exports = mongoose.model('Restaurants', restSchema)