import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserStatus } from '../enums/user.enums';
import { Exclude } from 'class-transformer';

export class UpdateUserDto {
  username?: string;
  email?: string;
  userStatus?: UserStatus;

  @Exclude()
  password?: string;

  constructor(partial: Partial<UpdateUserDto>) {
    Object.assign(this, partial);
  }
}
