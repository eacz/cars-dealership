import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Celica GT300' },
    { id: 2, brand: 'Honda', model: 'Civic Type-R' },
    { id: 3, brand: 'Mazda', model: 'RX-8' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new BadRequestException(`There is no car with id ${id}`);

    return car;
  }
}
