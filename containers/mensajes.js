const knex = require("../knexfile");

class Mensajes {
  constructor() {
    this.mensajes = [];
  }

  async getMensajes() {
    let data = [];
    await knex
      .select("email", "text", "created_at")
      .from("messages")
      .then((res) => {
        data = res;
      });
    return data;
  }

  async save(mensaje) {
    await knex("messages").insert(mensaje);
  }
}

module.exports = Mensajes;
