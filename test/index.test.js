const { describe } = require("mocha");
const request = require("supertest")("http://localhost:8080/productos");
const expect = require("chai").expect;

describe("Test de pagina principal", () => {
  describe("GET", () => {
    it("Deberia devolver un 200 - Ecommerce", (done) => {
      request
        .get("/")
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
    it("Deberia devolver un 200 - Todos los productos", (done) => {
      request
        .get("/productos")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("POST", () => {
    it("Deberia devolver un 200 - 1 producto", (done) => {
      request
        .post("/")
        .send({
          nombre: "producto",
          precio: 450,
          thumb: "url link",
        })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
