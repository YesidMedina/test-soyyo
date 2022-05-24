const axios = require("axios");

const { ENDPOINT_ENTITIES } = process.env;

class EntitiesExternal {
  getEntitiesByEntity(entityId) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(
          `${ENDPOINT_ENTITIES}/entity/v2.1/entities/${entityId}`
        );
        if (data) {
          resolve(data);
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = { EntitiesExternal };
