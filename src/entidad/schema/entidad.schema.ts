import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EntidadDocument = HydratedDocument<Entidad>;

@Schema()
export class Entidad {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  active: boolean;

  @Prop()
  created_at: String;

  @Prop()
  updated_at: Date;
}

export const EntidadSchema = SchemaFactory.createForClass(Entidad);