import { Sequelize } from 'sequelize-typescript';
import { Excel } from 'src/modules/excel/entities/excel.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'andy9999',
        database: 'Exceldatabase',
      });
      sequelize.addModels([Excel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];