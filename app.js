const express = require('express')
const exphbs = require('express-handlebars')

// Customized setting
require('./config/mongoose')
const restRouter = require('./routes/restRoutes')
const port = process.env.PORT || 3000

// Initialize app
const app = express()

// Global middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// View engine Setting
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// Routes
app.use('/', restRouter)

// Server listening
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
