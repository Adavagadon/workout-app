import Setting from '../models/Setting.js';

class SettingsService {
  async updateSettings(id, settings) {
    return await Setting.update(settings, { where: { userId: id } });
  }
}

export default new SettingsService();
