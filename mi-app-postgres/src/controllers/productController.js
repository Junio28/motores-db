const Client = require('../models/Product');
async function getProducts(req, res) {
    try {
        const products = await Product.findAll({
        });
        res.json({
            data: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

module.exports = getProducts;