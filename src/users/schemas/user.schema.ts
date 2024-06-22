import * as mongoose from 'mongoose';
import { UserStatus } from '../enums/user.enums';

export const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userStatus: {
    type: String,
    enum: Object.values(UserStatus),
    default: UserStatus.Active,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
