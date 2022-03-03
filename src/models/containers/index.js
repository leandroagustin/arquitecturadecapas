const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const dataBase = argv._[0]

let productDAO;
let msjDAO;

switch (dataBase) {
    case 'mongodb':
        const ProductContMongo = require('./');
        const MsjContMongo = require('./')
        productDAO = new ProductContMongo();
        msjDAO = new MsjContMongo();
        break;
    default:
        const ProdcutContMySQL = require('./prodContainerMySQL');
        const MsjContSQLite = require('./mensjContainerSQLite');
        productDAO = new ProdcutContMySQL();
        msjDAO = new MsjContSQLite();
        break
}

module.exports = { productDAO, msjDAO }