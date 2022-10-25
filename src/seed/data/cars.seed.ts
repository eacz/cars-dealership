import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla GTS AE-TRUENO' },
  { id: uuid(), brand: 'Honda', model: 'Civic Type-R' },
  { id: uuid(), brand: 'Nissan', model: '300Z' },
];
