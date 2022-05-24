const express = require("express");
const router = express.Router();
const  {entitiesRoutes}  = require("./entities.routes");

router.use("/api/v1/test-soyyo", entitiesRoutes);

module.exports = { router };
