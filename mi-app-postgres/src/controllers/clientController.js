const Client = require('../models/Client');
async function getClients(req, res) {
    try {
        const clients = await Client.findAll({
        });
        res.json({
            data: clients
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

module.exports = getClients;