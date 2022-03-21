const mongosee = require("mongoose");

const uri = "mongodb+srv://Leandro:123@clusterdemo.eullt.mongodb.net/test";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// config = {
//   name: "/CoderHouse-clase40",
//   collection: "productos-clase40",
//   host: "mongodb://localhost:27017",
// };

mongodb = {
  cnxStr: "mongodb+srv://Leandro:123@clusterdemo.eullt.mongodb.net/test",
  options: {
    serverSelectionTimeoutMS: 5000,
  },
};

class MongoClient {
  constructor() {
    // this.connect = false
    this.client = mongosee;
  }

  async connect() {
    try {
      this.client.connect(mongodb.host + mongodb.name, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB conectado");
    } catch (error) {
      throw "Error al conectar con MongoDB";
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log("MongoDB desconectado");
    } catch (error) {
      throw "Error al desconectar con MongoDB";
    }
  }
}

module.exports = MongoClient;
