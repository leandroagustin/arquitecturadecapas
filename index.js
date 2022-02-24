const express = require("express");
const app = express();
const router = require("./routes/productos");
const { engine } = require("express-handlebars");
const Productos = require("./containers/productos");
const Mensajes = require("./containers/mensajes");

// Server
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3030;

// Para trabajar con form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/productos", router);

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
app.use(express.static(__dirname + "/public"));

const prod = new Productos();
const msj = new Mensajes();

io.on("connection", async (socket) => {
  console.log("New connection");
  socket.emit("Messages", await msj.getMensajes());
  socket.emit("Products", await prod.getAll());

  socket.on("message_client", (data) => {
    console.log(data);
  });
  socket.on("updateConfirm", () => {
    console.log("Actualizado");
  });

  socket.on("dataText", async (dataObj) => {
    await msj.save(dataObj);
    socket.emit("Messages", await msj.getMensajes());
  });

  socket.on("newProd", async (dataObj) => {
    console.log(dataObj);
    await prod.save(dataObj);
    socket.emit("Products", await prod.getAll());
  });
});

// Rutas
app.get("/", (req, res) => {
  res.render("main");
});

server.listen(port, () => {
  console.log("Server running on " + port);
});
