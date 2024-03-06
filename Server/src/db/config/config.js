require('dotenv').config();



module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST, // ou o host do seu banco de dados, se aplicável
    username: process.env.POSTGRES_USER, // ou seu nome de usuário do banco de dados
    password: process.env.POSTGRES_PASSWORD, // ou sua senha do banco de dados
    database: process.env.POSTGRES_DATABASE, // ou o nome do seu banco de dados
    port:process.env.POSTGRES_PORT || 5432, // ou a porta do seu banco de dados
    dialectOptions: {
      ssl: true // Desativa o SSL para conexões de desenvolvimento
    }
  },
  production: {
    use_env_variable: process.env.POSTGRES_URL, // usa a variável de ambiente fornecida pela Vercel
    dialect: 'postgres',
    dialectModule: require('@vercel/postgres'), // usa o pacote @vercel/postgres para o PostgreSQL
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // configuração necessária para conexões SSL
      },
    },
  },
};


/* const { Sequelize } = require('sequelize');
const { createPool } = require('@vercel/postgres');



const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    dialectModule: require('@vercel/postgres'),
    dialectOptions: {
        connection: createPool()
    }
});

console.log(sequelize.options.dialect);


module.exports = sequelize.options.dialect; */

/* const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  use_env_variable: process.env.POSTGRES_URL,
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || '5432',
  database: process.env.POSTGRES_DB_NAME || 'verceldb',
  username: process.env.POSTGRES_USER || 'default',
  password: process.env.POSTGRES_PASSWORD,
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  }).catch(err => {
    console.log('Erro ao conectar com o banco de dados: ', err);
  });

module.exports = sequelize; */
/* const options = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || '5432',
  database:
    `${process.env.POSTGRES_DB_NAME || 'verceldb'}`,
  username: process.env.POSTGRES_USER || 'default',
  password: process.env.POSTGRES_PASSWORD,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
}; */