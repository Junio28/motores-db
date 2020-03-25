const Sale = require('../models/Sale');
async function getSales(req, res) {
    try {
        const sales = await Sale.findAll({
        });
        res.json({
            data: sales
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

module.exports = getSales;