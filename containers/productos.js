const knex = require("../db");

class Productos {
  constructor() {
    this.products = [];
  }

  async getAll() {
    let data = [];
    await knex
      .select("id", "nombre", "precio", "thumb")
      .from("products")
      .then((res) => {
        console.log("Producto guardado con éxito");
        data = res;
      });
    // console.log(data);
    return data;
  }

  async getById(id) {
    let data = [];
    await knex
      .select("id", "nombre", "precio", "thumb")
      .from("products")
      .where("id", id)
      .then((res) => {
        data = res;
      });
    return data;
  }

  async save(product) {
    let data = [];
    await knex("products")
      .insert(product)
      .then((res) => {
        data = res;
      });
    return data;
  }

  async deleteId(id) {
    await knex("products")
      .where("id", id)
      .del()
      .then((res) => {
        console.log("Producto eliminado con éxito");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async updateId(id, product) {
    let data = [];
    await knex("products")
      .where("id", id)
      .update({
        nombre: product.nombre,
        precio: product.precio,
        thumb: product.thumb,
        role: product.role,
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }
}

module.exports = Productos;
