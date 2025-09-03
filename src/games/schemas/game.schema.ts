import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SystemDescriptionsDto } from '../dto/description.dto';

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

// این کلاس برای مدل توضیحات است
@Schema()
class descriptionData {
  @Prop()
  short: string;
  @Prop()
  english: string;
  @Prop()
  persian: string;
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

  @Prop([String])
  genres: string[];
  @Prop([String])
  tags: string[];
  @Prop()
  trailerUrl: string;
  @Prop([String])
  supportedLanguages: string[];

  @Prop({ type: SystemRequirements })
  minimumSystemRequirements: SystemRequirements;
  @Prop({ type: SystemRequirements })
  recommendedSystemRequirements?: SystemRequirements;

  // فیلد توضیحات را به "description" تغییر دهید تا با DTO مطابقت داشته باشد
  @Prop({ type: descriptionData })
  description?: descriptionData;
}

export const GameSchema = SchemaFactory.createForClass(Game);