import { Sequelize } from 'sequelize';

let sequelize;

if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.HOST,
      dialect: 'postgres',
      logging: false,
    }
  );
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

  sequelize.authenticate();
}

export default sequelize;
