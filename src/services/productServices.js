const ProductDaos = require("../models/daos/productsDaos");

let instanceProdService = [];

class productServices {
  constructor() {
    this.ProductDaos = new ProductDaos();
    this.value = Math.random();
  }
  // SINGLETON
  static getInstance() {
    if (!instanceProdService) {
      instanceProdService = new productServices();
    }
    return instanceProdService;
  }
  // SINGLETON

  async getService() {
    let prods = await this.ProductDaos.getData();
    return prods;
  }
  async updateService(id, dato) {
    let prod = await this.ProductDaos.updateData(id, dato);
    return prod;
  }

  async deleteService(id) {
    let prod = await this.ProductDaos.deleteData(id);
    return prod;
  }

  async saveService(dataObj) {
    let prod = await this.ProductDaos.saveData(dataObj);
    return prod;
  }
  async getServiceById(id) {
    let prod;
    if (id) {
      prod = await this.ProductDaos.getByIdDB(id);
    } else {
      prod = await this.ProductDaos.getData();
    }
    return prod;
  }
}

module.exports = productServices;
