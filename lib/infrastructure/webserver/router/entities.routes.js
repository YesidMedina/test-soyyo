const express = require("express");
const entitiesRoutes = express.Router();
const {
  entitiesFilter,
} = require("../../../interfaces/controllers/EntitiesControllers");

entitiesRoutes.post("/entities/filter", entitiesFilter);

module.exports = { entitiesRoutes };
