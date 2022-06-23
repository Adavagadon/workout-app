import trainingsService from '../services/trainings.service.js';

class TrainingsController {
  async getTrainings(req, res) {
    if (!req.params.id)
      return res.status(400).send({ message: 'Please enter a trainings id.' });

    try {
      const resp = await trainingsService.getTrainings(req.params.id);

      if (resp.length === 0)
        return res.status(404).send({ message: 'Trainings not found.' });

      res.send({ data: resp });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async createTraining(req, res) {
    if (!req.body.id || !req.body.training)
      return res.status(400).send({ message: 'Some data is missing' });

    try {
      const resp = await trainingsService.createTraining(
        req.body.id,
        req.body.training
      );

      res
        .status(201)
        .send({ message: 'Training created successfully.', data: resp });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async updateTraining(req, res) {
    if (!req.body.id || !req.body.training)
      return res.status(400).send({ message: 'Some data is missing' });

    try {
      const resp = await trainingsService.updateTraining(
        req.body.id,
        req.body.training
      );

      if (!resp) return res.status(404).send({ message: 'User not found.' });

      res.send({ message: 'Training updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async deleteTraining(req, res) {
    if (!req.body.id)
      return res.status(400).send({ message: 'Training id is required.' });

    try {
      const resp = await trainingsService.deleteTraining(req.body.id);

      if (!resp)
        return res.status(404).send({ message: 'Training not found.' });

      res.send({ message: 'Training deleted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new TrainingsController();
