const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    database: "ecommerce",
  },

  pool: { min: 2, max: 8 },
});

knex.schema
  .hasTable("products", (table) => {
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

module.exports = knex;
