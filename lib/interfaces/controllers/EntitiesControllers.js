const { EntitiesFilter } = require("../../application/use_cases");

module.exports = {
  async entitiesFilter(req, res, next) {
    try {
      const { startId, endId } = req.query;
      const resp = await EntitiesFilter(startId, endId);
      next(resp);

      res.status(200).json(resp);
    } catch (error) {
      next(error);
    }
  },
};
