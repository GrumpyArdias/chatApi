import { UserStatus } from '../enums/user.enums';
export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  userStatus: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserDto extends Partial<IUser> {
  username: string;
  email: string;
  password: string;
}
