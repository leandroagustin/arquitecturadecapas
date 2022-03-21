const products = require("../config/MongoSchema");
const MongoClient = require("../config/MongoDB");

let instanceProdMongo = [];

class ProductosMongo {
  constructor() {
    this.products = [];
    this.value = Math.random();
    this.mongoClient = new MongoClient();
    this.mongoClient.connect();
  }

  // SINGLETON
  static getInstance() {
    if (!instanceProdMongo) {
      instanceProdMongo = new ProductosMongo();
    }
    return instanceProdMongo;
  }
  // SINGLETON

  async getAll() {
    try {
      let data = await products.find({});
      return data;
    } catch (error) {
      console.log("Problemas con el get " + error);
    }
  }
  async getById(id) {
    try {
      let data = await products.find({ _id: id });
      return data;
    } catch (error) {
      console.log("ID no encontrado " + error);
    }
  }
  async save(product) {
    try {
      let newProd = {
        nombre: product.nombre,
        precio: product.precio,
        thumb: product.thumb,
      };
      let data = await new products(newProd).save();
      return data;
    } catch (error) {
      console.log("Problemas con el save " + error);
    }
  }
  async deleteId(id) {
    try {
      let data = await products.findOneAndRemove({ _id: id });
      return data;
    } catch (error) {
      console.log("Problemas con el delete " + error);
    }
  }
  async updateId(id, product) {
    try {
      let data = products.findOneAndUpdate({ _id: id }, product);
      return data;
    } catch (error) {
      console.log("Problemas con el update " + error);
    }
  }
}

module.exports = ProductosMongo;
