import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import User from './User.js';

const Training = sequelize.define('Training', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  days: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

Training.belongsTo(User);

try {
  await Training.sync({ alter: true });
  console.log('Training table synced successfully.');
} catch (err) {
  console.error(err.message || err);
}

export default Training;
