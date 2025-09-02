// src/games/schemas/game.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true })
  title: string;

  // استفاده از marketPrice به جای price
  @Prop()
  marketPrice: number;

  // اضافه کردن فیلد hasDiscount
  @Prop()
  hasDiscount: boolean;
  
  // اضافه کردن فیلد platform که در DTO شما نبود
  @Prop()
  platform: string;

  @Prop()
  releaseDate: Date;
  
  // اضافه کردن فیلد betaDate
  @Prop({ required: false })
  betaDate?: Date;
  
  // اضافه کردن فیلد image
  @Prop()
  image: string;
  
  // اضافه کردن فیلد developer
  @Prop()
  developer: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);