const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now,
  },
  updatedAt: {
    type: Date,
    default: () => {
      Date.now;
    },
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

const User = mongoose.model("User", userSchema, "users");

async function getUsers() {
  return await User.find({});
}

async function userAge(age) {
  const ages = await User.find({ age: { $eq: age } });
  console.log(ages);
  return ages;
}

async function older(age) {
  const old = await User.find({ age: { $gt: age } });
  return old;
}

async function sortByAge() {
  const sorted = await User.find({}).sort({ age: 1 });
  return sorted;
}

async function createUser(data) {
  const newUser = new User(data);
  return await newUser.save();
}

async function updateUser(id, data) {
  return await User.updateOne({ _id: id }, data);
}

async function deleteOne(id) {
  return await User.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  userAge,
  older,
  sortByAge,
  createUser,
  updateUser,
  deleteOne,
};
