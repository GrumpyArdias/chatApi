import { Injectable } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICreateUserDto, IUser } from './types/user.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserSchema.name) private userModel: Model<UserSchema>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Partial<IUser>> {
    const createdUser = new this.userModel(createUserDto);
    const savedUser = await createdUser.save();
    if (!savedUser) throw new Error('User not created');
    return savedUser;
  }

  async findAll(): Promise<Partial<IUser>[]> {
    return await this.userModel.find().exec();
  }
  async findOne(id: number): Promise<Partial<IUser>> {
    return await this.userModel.findById(id).exec();
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Partial<IUser>> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  //Should I retrun deleted user?
  async remove(id: number): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
