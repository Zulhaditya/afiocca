import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
