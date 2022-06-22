import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';
import Training from './Training.js';

const Excercise = sequelize.define('excercise', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weightStep: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Excercise.belongsTo(Training);

try {
  await Excercise.sync({ alter: true });
  console.log('Excercise table synced successfully.');
} catch (err) {
  console.error(err.message || err);
}

export default Excercise;
