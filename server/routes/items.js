// New file for item routes, mirrors sauces, just changed any reference to Sauce
const express = require("express");
const router = express.Router();
const { Item } = require("../models"); // Pulled in Item instead of Sauce

// GET /items This will get all Items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/:id This will get one Item, I decided to search by id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// POST /items This will add an Item to the db
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body); // Create new Item from req.body
    if (!item) {
      throw new Error("Not added"); // If item is empty throw an error
    } else {
      res.sendStatus(200); // No need for any data being sent, so I send a code instead
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /items/:id This will destroy one Item, using the id as a filter
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Item.destroy({ where: { id: req.params.id } });
    if (deleted[0] === 0) {
      throw new Error("Not deleted");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
});

//PUT /items/:id This will update one item, using the id as a filter and the body as the update
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await Item.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 0) {
      throw new Error("Not updated");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
