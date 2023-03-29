import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EntidadService } from './entidad.service';
import { CreateEntidadDto } from './dto/create-entidad.dto';
import { UpdateEntidadDto } from './dto/update-entidad.dto';
import { FilterDateDto } from './dto/filter-date.dto';

@Controller('entidad')
export class EntidadController {
  constructor(private readonly entidadService: EntidadService) {}

  @Post()
  create(@Body() createEntidadDto: CreateEntidadDto) {
    return this.entidadService.create(createEntidadDto);
  }

  @Post('filter')
  filter(@Body() filterDateDto:FilterDateDto) {
    return this.entidadService.filter(filterDateDto);
  }

  @Get()
  findAll() {
    return this.entidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entidadService.findOne(id);
  }
  
  @Get('changeActive/:id')
  changeActive(@Param('id') id: string) {
    return this.entidadService.changeActive(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntidadDto: UpdateEntidadDto) {
    return this.entidadService.update(id, updateEntidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entidadService.remove(id);
  }

}
