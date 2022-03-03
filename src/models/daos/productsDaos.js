const { productDAO } = require('../containers/index');
let instanceProdDaos = []

class ProductDaos {
    constructor() {
        this.value = Math.random()
    }

    //SINGLETON 
    static getInstance() {
        if (!instanceProdDaos) {
            instanceProdDaos = new ProductDaos()
        }
        return instanceProdDaos
    }


    async getData() {
        let data = await productDAO.getAll()
        console.log(data)
    }
    async getByIdDB(id) {
        let data = await productDAO.getById(id)
        console.log(data)
    }
    async updateData(id, dato) {
        let data = await productDAO.updateId(id, dato)
        console.log(data)
    }
    async saveData(dataObj) {
        let data = await productDAO.save(dataObj)
        console.log(data)
    }
    async deleteData(id) {
        let data = await productDAO.deleteId(id)
        console.log(data)
    }

}

module.exports = ProductDaos;