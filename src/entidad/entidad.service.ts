import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Date, Model } from 'mongoose';
import { CreateEntidadDto } from './dto/create-entidad.dto';
import { FilterDateDto } from './dto/filter-date.dto';
import { UpdateEntidadDto } from './dto/update-entidad.dto';
import { Entidad, EntidadDocument, } from './schema/entidad.schema';

@Injectable()
export class EntidadService {

  constructor(@InjectModel(Entidad.name) private entidadModele: Model<EntidadDocument>) {

  }

  async create(createEntidadDto: CreateEntidadDto) {
    const { name, age, active } = createEntidadDto
    let date = new Date()
    return await this.entidadModele.create({
      name, age, active, created_at: date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    });
  }

  async findAll() {
    return await this.entidadModele.find();
  }

  async findOne(id: string) {
    return await this.entidadModele.findById(id);
  }

  async update(id: string, updateEntidadDto: UpdateEntidadDto) {
    const { name, age, active } = updateEntidadDto
    return await this.entidadModele.updateOne({ _id: id }, { name, age, active, updated_at: new Date() });
  }

  async remove(id: string) {
    return await this.entidadModele.deleteOne({ _id: id })
  }

  async changeActive(id: string) {
    const entidad = await this.entidadModele.findById(id)
    return await this.entidadModele.updateOne({ _id: id }, { active: !entidad.active });
  }

  async filter(filterDateDto: FilterDateDto) {
    let entidades = this.findAll()
    return (await entidades).filter(entidad => filterDateDto.fechaInicio > new Date(entidad.created_at as string) && filterDateDto.fechaFin < new Date(entidad.created_at as string))
  }

}
