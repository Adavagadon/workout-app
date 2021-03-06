import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';

const Setting = sequelize.define('setting', {
  setInterval: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '45 sec',
  },
  excerciseInterval: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '1 m',
  },
});

Setting.belongsTo(User, { foreignKey: { primaryKey: true } });

try {
  await Setting.sync({ alter: true });
  console.log('Settings table synced successfully.');
} catch (err) {
  console.error(err.message || err);
}

export default Setting;
