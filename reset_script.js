require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DB_NAME, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Banco de dados resetado com sucesso.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Erro ao resetar o banco de dados:', err);
    process.exit(1);
  });