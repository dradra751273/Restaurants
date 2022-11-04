const mongoose = require('mongoose')

const DB_URI = process.env.MONGODB_URI || 'mongodb+srv://fushaowei:water1988@cluster0.plcfxth.mongodb.net/restaurants?retryWrites=true&w=majority'
mongoose.connect(DB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


module.exports = db