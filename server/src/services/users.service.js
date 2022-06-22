import sharp from 'sharp';
import { Buffer } from 'node:buffer';
import User from '../models/User.js';

const FORMAT = 'webp';
const ENCODING = 'base64';

class UsersService {
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
    return User.update(data, { where: { id } });
  }

  async deleteUser(id) {
    return User.destroy({ where: { id } });
  }
}

export default new UsersService();
