const { Router } = require('express');
const { getDataController, updateDataController, deleteDataController } = require('../controllers/productController');

const router = new Router();

router.get("/", getDataController)

router.put("/:id", updateDataController)

router.delete("/:id", deleteDataController)

module.exports = router;

// const { Router } = require("express");
// const Productos = require("../containers/productos");

// const prod = new Productos();

// const router = new Router();

// router.get("/", (req, res) => {
//   res.render("productos");
// });

// router.put("/:id", async (req, res) => {
//   await prod.updateId(req.params.id, req.body);
// });

// router.delete("/:id", async (req, res) => {
//   await prod.deleteId(req.params.id);
// });

// module.exports = router;
