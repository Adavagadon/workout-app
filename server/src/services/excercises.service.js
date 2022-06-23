import Excercise from '../models/Excercise.js';

class ExcercisesService {
  async getExcercises(id) {
    return Excercise.findAll({ where: { trainingId: id }, raw: true });
  }

  async createExcercise(id, excercise) {
    excercise.trainingId = id;
    const result = await Excercise.create(excercise);
    return result.dataValues;
  }

  async updateExcercise(id, excercise) {
    const [result] = await Excercise.update(excercise, {
      where: { trainingId: id },
    });
    return result;
  }

  async deleteExcercise(id) {
    return await Excercise.destroy({ where: { id } });
  }
}

export default new ExcercisesService();
