import { UserStatus } from '../enums/user.enums';
import type { ICreateUserDto } from '../types/user.type';
import { Exclude } from 'class-transformer';
export class CreateUserDto implements ICreateUserDto {
  username: string;
  email: string;
  userStatus: UserStatus;

  @Exclude()
  password: string;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }
}
