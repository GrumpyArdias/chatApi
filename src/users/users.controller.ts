import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const createdUser = await this.usersService.create(createUserDto);
      return createdUser;
    } catch (error) {
      throw new BadRequestException('And error occured', {
        cause: error,
        description: 'User already exists',
      });
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return users;
    } catch (error) {
      throw new BadRequestException('And error occured', {
        cause: error,
        description: 'No users found',
      });
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(+id);
      return user;
    } catch (error) {
      throw new BadRequestException('And error occured', {
        cause: error,
        description: 'User not found',
      });
    }
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.usersService.update(+id, updateUserDto);
      return updatedUser;
    } catch (error) {
      throw new BadRequestException('And error occured', {
        cause: error,
        description: 'User not found',
      });
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
    } catch (error) {
      throw new BadRequestException('And error occured', {
        cause: error,
        description: 'User not found',
      });
    }
  }
}
