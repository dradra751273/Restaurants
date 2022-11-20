exports.globalErrHandler = function (err, req, res, next) {
  const error = JSON.parse(JSON.stringify(err))
  console.log(error)
}