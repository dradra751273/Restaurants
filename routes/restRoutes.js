const express = require('express')
const restController = require('../controllers/restController')
const router = express.Router()


router.route('/')
  .get(restController.getAllRestaurants)

router.route('/restaurants/info/:id')
  .get(restController.getRestaurant)

module.exports = router