const mongoose = require('mongoose')
const REST = require('./../models/restModel')
const catchAsync = require('../utils/catchAsync')

// 1) Read
exports.getRestaurant = catchAsync(async (req, res) => {
  const restaurant = await REST.findById(req.params['id']).lean()
  res.render('show', {restaurant: restaurant})
})


exports.getAllRestaurants = catchAsync(async (req, res) => {
  const restaurants = await REST.find().lean()
  res.render('index', {restaurants})
})


function filterByName(rest, keyword) {
  return rest['name'].toLowerCase().includes(keyword.toLowerCase()) ||
    rest['name_en'].toLowerCase().includes(keyword.toLowerCase())
}

function filterByCategory(rest, keyword) {
  return rest['category'].includes(keyword)
}

exports.searchRestaurants = catchAsync(async (req, res) => {
  const keyword = req.query['keyword'].trim()
  const restaurants = await REST.find().lean()
  const searchedRests = restaurants.filter(rest => {
    return filterByName(rest, keyword) || filterByCategory(rest, keyword)
  })
  res.render('index', {restaurants: searchedRests})
})

// 2) Update
// Bring restaurant info to the edit page
exports.getRestaurantDetails = catchAsync(async (req, res) => {
  if (mongoose.isValidObjectId(req.params['id'])) {
    const restaurant = await REST.findById(req.params['id']).lean()
    res.render('edit', {restaurant})
  } else {
    res.redirect('/')
  }
})


exports.editRestaurant = catchAsync(async (req, res) => {
  if (mongoose.isValidObjectId(req.body.id)) {
    await REST.findByIdAndUpdate(
      req.body.id, req.body, {new: true, runValidators: true}
    )
    res.redirect(`/restaurants/info/${req.body.id}`)
  } else {
    res.redirect('/')
  }
})


// 3) Create
exports.showAddRestForm = catchAsync(async (req, res) => {
  res.render('edit')
})

exports.addRestaurant = catchAsync(async (req, res) => {
  try {
    const doc = await REST.create(req.body)
    res.redirect(`/restaurants/info/${doc['_id']}`)
  } catch (err) {
    console.log(err)
  }
})

// 4) Delete
exports.deleteRestaurant = catchAsync(async (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    await REST.findByIdAndDelete(req.params.id)
    res.redirect('/')
  } else {
    res.redirect('/')
  }
})


exports.sortRestaurants = catchAsync(async (req, res) => {

  const sortWay = req.params['sortWay']

  if (sortWay === 'normal') {
    const restaurants = await REST.find().sort({'name_en': 'asc'}).lean()
    res.render('index', {restaurants})
  }
  if (sortWay === 'reverse') {
    const restaurants = await REST.find().sort({'name_en': 'desc'}).lean()
    res.render('index', {restaurants})
  }
  if (sortWay === 'category') {
    const restaurants = await REST.find().sort({'category': 1}).lean()
    res.render('index', {restaurants})
  }
})
