import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Celica GT300' },
    { id: uuid(), brand: 'Honda', model: 'Civic Type-R' },
    { id: uuid(), brand: 'Mazda', model: 'RX-8' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new BadRequestException(`There is no car with id ${id}`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = { ...createCarDto, id: uuid() };
    this.cars.push(car);
    return car;
  }
}
