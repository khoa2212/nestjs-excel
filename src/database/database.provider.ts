import { Sequelize } from 'sequelize-typescript';
import { Excel } from 'src/modules/excel/entities/excel.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Excel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];