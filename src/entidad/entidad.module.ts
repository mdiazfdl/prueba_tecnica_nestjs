import { Module } from '@nestjs/common';
import { EntidadService } from './entidad.service';
import { EntidadController } from './entidad.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entidad, EntidadSchema } from './schema/entidad.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Entidad.name,
        schema:EntidadSchema
      }
    ])
  ],
  controllers: [EntidadController],
  providers: [EntidadService]
})
export class EntidadModule {}
