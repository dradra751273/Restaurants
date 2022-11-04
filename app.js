const express = require('express')
const exphbs = require('express-handlebars')


// Customized setting
const port = 3000

// Initialize app
const app = express()

// Global middleware
app.use(express.urlencoded({extended: true}))

// View engine Setting
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// Server listening
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
