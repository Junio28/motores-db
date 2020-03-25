//En Sqlite3
const Sequelize = require('sequelize');

const DB_NAME = 'prueba_node'; //nombre dela base de daros previamente creada
const DB_USER = null; // nombre del usuario en nuestro motor db,
const DB_PASS = null; // contraseña

var sequelize = new Sequelize(
    DB_NAME,
    DB_USER, 
    DB_PASS,
{
    dialect:'sqlite',
    storage:'prueba_node.db',
    define:{
      underscore:true
    }
    }
);


sequelize.sync({ force: true })
 .then(function () {
    console.log(`Database & tables created!`);
  });

module.exports = {sequelize}
