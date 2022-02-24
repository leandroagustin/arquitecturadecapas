exports.up = function (knex) {
  knex.schema
    .createTable("messages", (table) => {
      table.increments("id").primary(),
        table.timestamp("created_at").defaultTo(knex.fn.now()),
        table.string("email"),
        table.string("text");
    })
    .then((res) => {
      console.log("Tabla de mensajes creada");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.down = function (knex) {};
