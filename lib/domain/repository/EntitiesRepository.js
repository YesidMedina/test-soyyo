module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  getEntitiesByEntity(entityId) {
    return this.repository.getEntitiesByEntity(entityId);
  }
};
