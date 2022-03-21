const ProductServices = require("../services/productServices");

const prodServices = new ProductServices();

const getDataController = async (req, res) => {
  let data = await prodServices.getService();
  res.json({ data: data });
};

const getDataControllerId = async (req, res) => {
  let data = await prodServices.getServiceById(req.params.id);
  res.json({ data: data });
};

const postDataController = async (req, res) => {
  let data = await prodServices.saveService(req.body);
  res.json({ data: data });
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

// para el socket.io
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
  getDataControllerId,
  postDataController,
  updateDataController,
  deleteDataController,
  emitProdController,
  saveProdController,
};
