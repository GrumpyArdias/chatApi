import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserStatus } from '../enums/user.enums';
import { Exclude } from 'class-transformer';

export type CatDocument = HydratedDocument<UserSchema>;

@Schema()
export class UserSchema {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Exclude()
  @Prop({ required: true })
  password: string;

  @Prop({ enum: Object.values(UserStatus), default: UserStatus.Active })
  userStatus: UserStatus;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}
