import authService from '../services/auth.service.js';

class AuthController {
  async register(req, res) {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.username ||
      !req.body.password
    )
      return res.status(400).send({ message: 'Some data is missing' });

    try {
      const user = await authService.findUser(req.body.username);

      if (user)
        return res.status(400).send({ message: 'User already registered' });

      const password = await authService.hashPassword(req.body.password);

      const { id, username } = await authService.createUser({
        username: req.body.username,
        password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });

      const token = await authService.generateToken({ id, username });

      res.status(201).send({ message: 'User created', token });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async login(req, res) {
    if (!req.body.username || !req.body.password)
      return res.status(400).send({ message: 'Some data are missing' });

    try {
      const { id, username, password } = await authService.findUser(
        req.body.username
      );

      if (!username)
        return res.status(404).send({ message: 'User not found.' });

      const result = await authService.comparePassword(
        req.body.password,
        password
      );

      if (!result) return res.status(400).send({ message: 'Wrong password' });

      const token = await authService.generateToken({ id, username });

      res.send({ message: 'User authorized', token });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new AuthController();
