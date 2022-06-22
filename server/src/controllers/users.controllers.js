import usersService from '../services/users.service.js';

class UsersController {
  async updateImage(req, res) {
    if (!req.file || !req.body.id)
      return res.status(400).send({ message: 'Some data is missing.' });

    try {
      const resp = await usersService.updateImage(req.file, req.body.id);

      if (!resp) return res.status(404).send({ message: 'User not found.' });

      res.send({ message: 'Image updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async updateUser(req, res) {
    if (!req.body.id || !req.body.data)
      return res.status(400).send({ message: 'User id is required.' });

    try {
      const resp = await usersService.updateUser(req.body.id, req.body.data);

      if (!resp) return res.status(404).send({ message: 'User not found.' });

      res.send({ message: 'User updated.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async deleteUser(req, res) {
    if (!req.body.id) res.status(400).send({ message: 'User id is required.' });

    try {
      const resp = await usersService.deleteUser(req.body.id);

      if (!resp) return res.status(404).send({ message: 'User not found.' });

      res.send({ message: 'User deleted.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new UsersController();
