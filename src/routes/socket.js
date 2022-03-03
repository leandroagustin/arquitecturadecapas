const {
  emitProdController,
  saveProdController,
} = require("../controllers/productController");
const {
  emitMsjController,
  saveMsjController,
} = require("../controllers/msjControllers");

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
