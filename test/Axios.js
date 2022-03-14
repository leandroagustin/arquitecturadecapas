const axios = require("axios");

const url = "http://localhost:8080/productos";

axios
  .get(url)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .get(url + "/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .post(url, {
    nombre: "bici",
    precio: 5500,
    thumb: "Topmega",
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .put(url + "/2", {
    nombre: "bici2",
    precio: 3400,
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
