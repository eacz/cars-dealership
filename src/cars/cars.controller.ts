import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Mazda'];
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    const parseId = +id;

    if (isNaN(parseId)) return 'Invalid Id';
    const car =
      this.cars.length - 1 < parseId
        ? `There is no car with id ${parseId}`
        : this.cars[parseId];
    return car;
  }
}
