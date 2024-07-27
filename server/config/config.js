import { Sequelize } from "sequelize";

const DB_USERNAME = process.env.DB_USERNAME || "root"
const DB_PASSWORD = process.env.DB_PASSWORD || ""
const DB_NAME = process.env.DB_NAME || "astrology"

const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

export default sequelize