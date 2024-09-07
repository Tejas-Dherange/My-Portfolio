import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    Subject: String,
    message: String

}, { timestamps: true })


const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;