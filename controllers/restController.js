const REST = require('./../models/restModel')
const mongoose = require('mongoose')

exports.getAllRestaurants = async (req, res) => {
    const restaurants = await REST.find().lean()
    res.render('index', {restaurants})
}