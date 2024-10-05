import { model } from "mongoose";
import { userSchema } from "../schemas/UserSchema.js";
const UsersModel = new model("user", userSchema);
export default UsersModel;
