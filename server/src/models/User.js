import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  mdImgBuffer: {
    type: DataTypes.STRING(8192),
  },
  smImgBuffer: {
    type: DataTypes.STRING(8192),
  },
});

try {
  await User.sync({ alter: true });
  console.log('Users table synced successfully.');
} catch (err) {
  console.error(err.message || err);
}

export default User;
