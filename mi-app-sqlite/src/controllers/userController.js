const User = require('../models/User');
async function getUsers(req, res) {
    try {
        const users = await User.findAll({
        });
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

module.exports = getUsers;