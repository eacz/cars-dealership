import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const alreadyExists = !!this.brands.find(
      (brand) => brand.name.toLowerCase() === createBrandDto.name.toLowerCase(),
    );
    if (alreadyExists) {
      throw new UnprocessableEntityException(
        `There is already a brand with name ${createBrandDto.name}`,
      );
    }

    const brand: Brand = {
      ...createBrandDto,
      id: uuid(),
      createdAt: Date.now(),
    };
    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`There is no brand with id ${id}`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let updatedBrand = this.findOne(id);

    updatedBrand = {
      ...updatedBrand,
      ...updateBrandDto,
      updatedAt: Date.now(),
    };
    this.brands = this.brands.map((brand) =>
      brand.id === id ? updatedBrand : brand,
    );
    return updatedBrand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
