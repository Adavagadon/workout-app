import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

class AuthService {
  async findUser(username) {
    return await User.findOne({ where: { username }, raw: true });
  }

  async createUser(user) {
    const res = await User.create(user);
    return res.dataValues;
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, +process.env.SALT);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
  }
}

export default new AuthService();
