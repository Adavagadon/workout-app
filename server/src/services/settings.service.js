import Setting from '../models/Setting.js';

class SettingsService {
  async getSettings(id) {
    return await Setting.findByPk(id, { raw: true });
  }

  async updateSettings(id, settings) {
    return await Setting.update(settings, { where: { userId: id } });
  }
}

export default new SettingsService();
