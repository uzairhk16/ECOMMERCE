import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} },
}, {minimize: false});
// minimize - whenever the new user is created the cart data will be empty

const userModel =mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
