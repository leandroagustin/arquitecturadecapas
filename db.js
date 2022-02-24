const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "coderTest",
  },
  pool: { min: 2, max: 8 },
});

knex.schema
  .createTableIfNotExists("products", (table) => {
    table.increments("id").primary(),
      table.timestamps(true, true),
      table.string("nombre"),
      table.integer("precio"),
      table.string("thumb"),
      table.string("role").defaultTo("user");
  })
  .then((res) => {
    console.log("Tabla de productos creada");
  })
  .catch((err) => {
    console.log(err);
  });

knex.schema
  .createTableIfNotExists("messages", (table) => {
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

module.exports = knex;
