const express = require('express')
const restController = require('../controllers/restController')
const router = express.Router()


router.route('/')
  .get(restController.getAllRestaurants)

router.route('/restaurants/info/:id')
  .get(restController.getRestaurant)

router.route('/restaurants/search')
  .get(restController.searchRestaurants)

router.route('/restaurants/edit')
  .get(restController.getRestaurantInfo)

module.exports = router