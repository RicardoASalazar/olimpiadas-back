const { complejo } = require("../models");
const { Op } = require("@sequelize/core");

class ComplejoServices {
  static async filter(filter) {
    try {
      const result = await complejo.findAll({
        where: {
          [Op.or]: [
            {
              com_descripcion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_jefe: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_localizacion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_area: {
                [Op.like]: `%${filter}%`,
              },
            },
          ],
        },
      });
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await complejo.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ComplejoServices;
