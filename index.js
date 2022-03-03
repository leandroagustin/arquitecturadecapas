const express = require("express");
const app = express();
// const dotenv = require("dotenv").config();
const routerPr = require("./src/routes/productos");
const { engine } = require("express-handlebars");
// const Productos = require("./containers/productos");
// const Mensajes = require("./containers/mensajes");
const path = require("path");
const {
  emitProdController,
  saveProdController,
} = require("./src/controllers/productController");
const {
  emitMsjController,
  saveMsjController,
} = require("./src/controllers/msjControllers");

// Server
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 8080;

// Para trabajar con form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/productos", routerPr);

// Motores de plantillas >> Hbs
app.set("views", "./views");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials",
  })
);

// Socket
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static(path.join(__dirname + "/public")));

// io.on("connection", async (socket) => {
//   console.log("Cliente conectado");

//   //Socket PRODUCTOS
//   socket.emit("server_sendProducts", await handlerProducts.getAll());

//   socket.on("client_newProduct", async (item) => {
//     await handlerProducts.save(item);
//     io.emit("server_sendProducts", await handlerProducts.getAll());
//   });
//   //FIN Socket PRODUCTOS

//   //Socket MENSAJES
//   socket.emit(
//     "server_sendMessages",
//     listarMensajesNormalizados(await handlerMessages.getAll())
//   );

//   socket.on("client_newMessage", async (objmessage) => {
//     await handlerMessages.save(objmessage);
//     io.emit(
//       "server_sendMessages",
//       listarMensajesNormalizados(await handlerMessages.getAll())
//     );
//   });
// });
///////////////////////////////////////////////////
io.on("connection", async (socket) => {
  console.log("New connection");
  socket.emit("Messages", await emitMsjController);
  socket.emit("Products", await emitProdController);

  socket.on("message_client", (data) => {
    console.log(data);
  });
  socket.on("updateConfirm", () => {
    console.log("Actualizado");
  });

  socket.on("dataText", async (dataObj) => {
    await saveMsjController(dataObj);
    socket.emit("Messages", await emitMsjController);
  });

  socket.on("newProd", async (dataObj) => {
    console.log(dataObj);
    await saveProdController(dataObj);
    socket.emit("Products", await emitProdController);
  });
});
////////////////////////////////////////////////////
// Socket
// const { Server } = require("socket.io");
// const io = new Server(server);

// const prod = new Productos();
// const msj = new Mensajes();

// io.on("connection", async (socket) => {
//   console.log("New connection");
//   socket.emit("Messages", await msj.getMensajes());
//   socket.emit("Products", await prod.getAll());

//   socket.on("message_client", (data) => {
//     console.log(data);
//   });
//   socket.on("updateConfirm", () => {
//     console.log("Actualizado");
//   });

//   socket.on("dataText", async (dataObj) => {
//     await msj.save(dataObj);
//     socket.emit("Messages", await msj.getMensajes());
//   });

//   socket.on("newProd", async (dataObj) => {
//     console.log(dataObj);
//     await prod.save(dataObj);
//     socket.emit("Products", await prod.getAll());
//   });
// });

// Rutas
app.get("/", (req, res) => {
  res.render("main");
});

server.listen(port, () => {
  console.log("Server running on " + port);
});
