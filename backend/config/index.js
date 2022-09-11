require('dotenv').config() // this loads the defined variables from .env

const config = {
  app: {
    port: process.env.APP_PORT || 8080,
  },
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    cluster: process.env.DB_CLUSTER,
    dbname: process.env.DB_NAME,
  },
  jwt: {
    key: process.env.JWT_SECRET || 'key',
  },
}
module.exports = config
