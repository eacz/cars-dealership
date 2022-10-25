import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  { id: uuid(), name: 'Toyota', createdAt: Date.now() },
  { id: uuid(), name: 'Honda', createdAt: Date.now() },
  { id: uuid(), name: 'Nissan', createdAt: Date.now() },
  { id: uuid(), name: 'Mazda', createdAt: Date.now() },
  { id: uuid(), name: 'Mitsubishi', createdAt: Date.now() },
];
