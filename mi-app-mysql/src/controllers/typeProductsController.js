const Client = require('../models/TypeProduct');
async function getTypeProducts(req, res) {
    try {
        const typeproducts = await TypeProduct.findAll({
        });
        res.json({
            data: typeproducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

module.exports = getTypeProducts;