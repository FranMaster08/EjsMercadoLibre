const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    let visitados = products.filter((item) => item.category == "visited");
    let enVenta = products.filter((item) => item.category != "visited");
    res.render("index", { visitados, enVenta });
  },
  search: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
