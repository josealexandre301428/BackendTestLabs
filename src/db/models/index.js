const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const { Client } = require('@vercel/postgres');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres', // Defina o dialeto explicitamente
    dialectModule: Client, // Use o cliente PostgreSQL do @vercel/postgres
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });



sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });


const db = {};

// Importe os modelos aqui
const UserModel = require('./users');
const ProductModel = require('./products');

// Inicialize os modelos
db.users = UserModel.init(sequelize, DataTypes);
db.products = ProductModel.init(sequelize, DataTypes);

// Execute as associações (relacionamentos) entre os modelos, se houver
Object.values(db)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db));


module.exports = db;
