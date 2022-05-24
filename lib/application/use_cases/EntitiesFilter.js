const { EntitiesRepository } = require("../../domain/repository");
const {
  EntitiesExternal,
} = require("../../infrastructure/externalRepositories");
const entitiesRepository = new EntitiesRepository(new EntitiesExternal());

module.exports = (startId, endId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let arrEntity = [];

      if (startId > 20 || endId > 20) {
        resolve({
          statusCode: 404,
          message: "Error no se encuentra para rango especificado",
        });
        return;
      }

      for (let index = startId; index <= endId; index++) {
        const res = await entitiesRepository.getEntitiesByEntity(index);

        if (res.message !== "Data not found") {
          arrEntity.push(res);
        } else {
          
          arrEntity.push({
            statusCode: 400,
            message: "Error en validacion de datos de entrada",
          });
        }
      }

      const orderByNames = arrEntity.sort((a, b) =>
        a.data?.name < b.data?.name ? -1 : 1
      );

      resolve({
        statusCode: 200,
        mesagge: "OK",
        content: orderByNames,
        startId,
        endId,
      });
    } catch (error) {
      reject(error);
    }
  });
};
