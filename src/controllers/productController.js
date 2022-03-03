const ProductServices = require("../services/productServices");

const prodServices = new ProductServices();

const getDataController = async (req, res) => {
  let data = await prodServices.getService();
  res.render("productos", { data: data });
};

const updateDataController = async (req, res) => {
  let id = req.params.id;
  let dato = req.body;
  await prodServices.updateService(id, dato);
  res.send("Actualizado");
};

const deleteDataController = async (req, res) => {
  let id = req.params.id;
  await prodServices.deleteService(id);
  res.send("Eliminado");
};

// Socket.io
const emitProdController = async () => {
  let data = await prodServices.getService();
  return data;
};

const saveProdController = async (dataObj) => {
  let data = await prodServices.saveService(dataObj);
  return data;
};

module.exports = {
  getDataController,
  updateDataController,
  deleteDataController,
  emitProdController,
  saveProdController,
};
