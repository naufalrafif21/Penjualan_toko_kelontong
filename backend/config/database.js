import { Sequelize } from "sequelize";
 
const db = new Sequelize('produk', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;