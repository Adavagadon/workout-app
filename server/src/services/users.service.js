import sharp from 'sharp';
import { Buffer } from 'node:buffer';
import User from '../models/User.js';
import Setting from '../models/Setting.js';

const FORMAT = 'webp';
const ENCODING = 'base64';

class UsersService {
  async getUser(id) {
    return await User.findByPk(id, { raw: true });
  }

  async updateImage(image, id) {
    const buffer = Buffer.from(image.buffer);
    const mdBuffer = await sharp(buffer).resize(512, 512)[FORMAT]().toBuffer();
    const smBuffer = await sharp(buffer).resize(256, 256)[FORMAT]().toBuffer();

    const mdString = mdBuffer.toString(ENCODING);
    const smString = smBuffer.toString(ENCODING);

    return User.update(
      { mdImgBuffer: mdString, smImgBuffer: smString },
      { where: { id } }
    );
  }

  async updateUser(id, data) {
    const [result] = await User.update(data, { where: { id } });
    return result;
  }

  async deleteUser(id) {
    await Setting.destroy({ where: { userId: id } });
    return await User.destroy({ where: { id } });
  }
}

export default new UsersService();
