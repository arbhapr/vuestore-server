const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while retrieving products.",
            })
        })
}

exports.findOne = (req, res) => {
    const code = String(req.params.code);
    Product.findOne({ code })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409).send({
                message: err.message || "Some error occurred while retrieving product detail.",
            })
        })
}