import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    "name": String,
    "firstname": String,
    "email": String
});

const User = mongoose.model('users', userSchema);

export default User;