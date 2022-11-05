const express = require('express')
const restController = require('../controllers/restController')
const router = express.Router()


router.route('/')
  .get(restController.getAllRestaurants)


module.exports = router