import Training from '../models/Training.js';
import Excercise from '../models/Excercise.js';

class TrainingsService {
  async getTrainings(id) {
    return await Training.findAll({ where: { userId: id }, raw: true });
  }

  async createTraining(id, training) {
    training.userId = id;
    const result = await Training.create(training);
    return result.dataValues;
  }

  async updateTraining(id, training) {
    const [result] = await Training.update(training, { where: { userId: id } });
    return result;
  }

  async deleteTraining(id) {
    await Excercise.destroy({ where: { trainingId: id } });
    return await Training.destroy({ where: { id } });
  }
}

export default new TrainingsService();
