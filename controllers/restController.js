const REST = require('./../models/restModel')
const mongoose = require('mongoose')

exports.getAllRestaurants = async (req, res) => {
  const restaurants = await REST.find().lean()
  res.render('index', {restaurants})
}

exports.getRestaurant = async (req, res) => {
  const restaurant = await REST.findById(req.params['id']).lean()
  res.render('show', {restaurant: restaurant})
}

