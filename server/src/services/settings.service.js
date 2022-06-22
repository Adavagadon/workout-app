import Setting from '../models/Setting.js';

class SettingsService {
  async updateSettings(id, settings) {
    return await Setting.update(settings, { where: { userId: id } });
  }

  async deleteSettings(id) {
    return await Setting.destroy({ where: { userId: id } });
  }
}

export default new SettingsService();
