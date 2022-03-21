const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

mongoose.connect(
  "mongodb+srv://Leandro:123@clusterdemo.eullt.mongodb.net/test"
);

mongoose.connection.on("open", () => {
  console.log("Base de datos conectada con exito");
});

mongoose.connection.on("error", () => {
  console.log("Error al conectarse a la base de datos");
});

const productSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = model("products", productSchema);
