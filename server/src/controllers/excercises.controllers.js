import excercisesService from '../services/excercises.service.js';

class ExcercisesController {
  async getExcercises(req, res) {
    if (!req.body.id)
      return res.status(400).send({ message: 'Excercise id is required.' });

    try {
      const resp = await excercisesService.getExcercises(req.body.id);

      if (resp.length === 0)
        return res.status(404).send({ message: 'Excercises not found.' });

      res.send(resp);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async createExcercise(req, res) {
    if (!req.body.id || !req.body.excercise)
      return res.status(400).send({ message: 'Some data is missing.' });

    try {
      const resp = await excercisesService.createExcercise(
        req.body.id,
        req.body.excercise
      );

      res
        .status(201)
        .send({ message: 'Excercise created successfully.', data: resp });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async updateExcercise(req, res) {
    if (!req.body.id || !req.body.excercise)
      return res.status(400).send({ message: 'Some data is missing.' });

    try {
      const resp = await excercisesService.updateExcercise(
        req.body.id,
        req.body.excercise
      );

      if (!resp) return res.status(404).send({ message: 'User not found.' });

      res.send({ message: 'Training data updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async deleteExcercise(req, res) {
    if (!req.body.id)
      return res.status(400).send({ message: 'Excercise id is required.' });

    try {
      const resp = await excercisesService.deleteExcercise(req.body.id);

      if (!resp)
        return res.status(404).send({ message: 'Excercise not found.' });

      res.send({ message: 'Training deleted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new ExcercisesController();
