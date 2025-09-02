import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// کلاس جداگانه برای سیستم مورد نیاز
@Schema()
class SystemRequirements {
  @Prop()
  os: string;

  @Prop()
  processor: string;

  @Prop()
  graphicsCard: string;

  @Prop()
  ram: string;

  @Prop()
  storage: string;
}

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true })
  title: string;

  @Prop()
  marketPrice: number;

  @Prop()
  hasDiscount: boolean;
  
  @Prop()
  platform: string;

  @Prop()
  releaseDate: Date;
  
  @Prop({ required: false })
  betaDate?: Date;
  
  @Prop()
  image: string;
  
  @Prop()
  developer: string;

  // فیلدهای توضیحات
  @Prop()
  shortDescription: string;

  @Prop()
  persianDescription: string;

  @Prop()
  englishDescription: string;

  // فیلدهای جدید
  @Prop([String])
  genres: string[];

  @Prop([String])
  tags: string[];

  @Prop()
  trailerUrl: string;

  @Prop([String])
  supportedLanguages: string[];

  // سیستم مورد نیاز به صورت تو در تو
  @Prop({ type: SystemRequirements })
  minimumSystemRequirements: SystemRequirements;

  @Prop({ type: SystemRequirements })
  recommendedSystemRequirements?: SystemRequirements;
}

export const GameSchema = SchemaFactory.createForClass(Game);