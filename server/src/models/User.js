import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nickName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
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
    type: DataTypes.STRING,
  },
  smImgBuffer: {
    type: DataTypes.STRING,
  },
});

try {
  await User.sync({ alter: true });
  console.log('Users table synced successfully.');
} catch (err) {
  console.error(err.message || err);
}

export default User;
