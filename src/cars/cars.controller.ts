import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.getCarById(id);
  }

  @Post()
  createCar(@Body() body) {
    console.log(body);

    return body;
  }
  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() body) {
    return { id, body };
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return { id };
  }
}
