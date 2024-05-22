module.exports = (app) => {
    const products = require('../controllers/product.controller')
    const router = require('express').Router()
    
    router.get('/', products.findAll)
    router.get('/:code', products.findOne)
    
    app.use('/v1/api/products', router)
}