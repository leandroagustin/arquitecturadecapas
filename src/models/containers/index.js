const minimist = require("minimist");
const argv = minimist(process.argv.slice(2));
const dataBase = argv._[0];
let productDAO;
let msjDAO;

switch (dataBase) {
  case "mongodb":
    const ProductosMongo = require("./prodContainerMongoDB");
    const MensajesMongo = require("./MensjContainerMongoDB");
    productDAO = new ProductosMongo();
    msjDAO = new MensajesMongo();
    break;
  default:
    const ProductosMySQL = require("./prodContainerMySQL");
    const MensajesSQLite = require("./mensjContainerSQLite");
    productDAO = new ProductosMySQL();
    msjDAO = new MensajesSQLite();
    break;
}

module.exports = { productDAO, msjDAO };
