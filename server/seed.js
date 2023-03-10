const { sauces, items } = require("./seedData.js");

const { sequelize } = require("./db");
const { Sauce, Item } = require("./models"); // Added Item to the import so I can seed the data

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(sauces.map((sauce) => Sauce.create(sauce)));
    // Added a Promise.all adding the items to the database using my Item model
    await Promise.all(items.map((item) => Item.create(item)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
