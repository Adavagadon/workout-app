import settingsService from '../services/settings.service.js';

class SettingsController {
  async updateSettings(req, res) {
    if (!req.body.id || !req.body.settings)
      return res.status(400).send({ message: 'Some data is missing.' });

    try {
      const resp = await settingsService.updateSettings(
        req.body.id,
        req.body.settings
      );

      if (!resp)
        return res.status(404).send({ message: 'Settings not found.' });

      res.send({ message: 'Settings updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new SettingsController();
