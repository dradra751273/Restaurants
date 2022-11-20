const express = require('express')
const restController = require('../controllers/restController')
const router = express.Router()


router.route('/')
  .get(restController.getAllRestaurants)

router.route('/restaurants/info/:id')
  .get(restController.getRestaurant)

router.route('/restaurants/search')
  .get(restController.searchRestaurants)

router.route('/restaurants/:id/edit')
  .get(restController.getRestaurantDetails)
  .post(restController.editRestaurant)

router.route('/restaurants/:id/delete')
  .get(restController.deleteRestaurant)

router.route('/restaurants/add')
  .get(restController.showAddRestForm)
  .post(restController.addRestaurant)

router.route('/restaurants/sort/:sortWay')
  .get(restController.sortRestaurants)

module.exports = router