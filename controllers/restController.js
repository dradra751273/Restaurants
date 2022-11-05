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


function filterByName(rest, keyword) {
  return rest['name'].toLowerCase().includes(keyword.toLowerCase()) ||
    rest['name_en'].toLowerCase().includes(keyword.toLowerCase())
}

function filterByCategory(rest, keyword) {
  return rest['category'].includes(keyword)
}

exports.searchRestaurants = async (req, res) => {
  const keyword = req.query['keyword']
  const restaurants = await REST.find().lean()
  const searchedRests = restaurants.filter(rest => {
    return filterByName(rest, keyword) || filterByCategory(rest, keyword)
  })
  res.render('index', {restaurants: searchedRests})
}