import { Excel } from "./entities/excel.entity";

export const excelProviders = [
  {
    provide: 'ExcelsRepository',
    useValue: Excel,
  },
];