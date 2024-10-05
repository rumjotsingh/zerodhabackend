import { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  token: String,
});

export { userSchema };
