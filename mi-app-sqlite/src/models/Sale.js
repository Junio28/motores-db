const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const Product = require('./Product')
const SaleProduct = require('./SaleProduct')
const User = require('./User')

const Sale = sequelize.define('sale', {
  
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  subtotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
    unique: true
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  created: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  updated: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false
});

Sale.belongsToMany(Product, { through:SaleProduct  });
Product.belongsToMany(Sale, { through:SaleProduct  });

User.hasMany(Sale, { foreinkey: 'userId', sourceKey: 'id' });
Sale.belongsTo(User, { foreinkey: 'userId', targetId: 'id' });

module.exports = Sale

