const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

// Item model that mirrors the seed data, I could have put this in a seperate file

const Item = sequelize.define("Item", {
  title: Sequelize.STRING,
  price: Sequelize.NUMBER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

// Added the Item model to the export
module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
