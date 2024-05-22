module.exports = (app) => {
    const orders = require('../controllers/order.controller')
    const router = require('express').Router()
    
    router.get('/user/:id', orders.findOrder)
    router.post('/user/:id/add', orders.addToCart)
    router.delete('/user/:id/product/:product', orders.removeFromCart)
    
    app.use('/v1/api/orders', router)
}