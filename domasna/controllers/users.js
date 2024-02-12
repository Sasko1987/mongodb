const {
  userAge,
  getUsers,
  older,
  sortByAge,
  createUser,
  updateUser,
  deleteOne,
} = require("../models/user");

async function getUsersAge(req, res) {
  try {
    const userAgee = await userAge(req.params.age);
    res.status(200).send(userAgee);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function getAllUsers(req, res) {
  try {
    const allUsers = await getUsers();
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function getOlderUsers(req, res) {
  try {
    const olderUsers = await older(req.params.age);
    res.status(200).send(olderUsers);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function getUsersByAge(req, res) {
  try {
    const sorted = await sortByAge();
    res.status(200).send(sorted);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function addNewUser(req, res) {
  try {
    await createUser(req.body);
    res.status(201).send("user was created");
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function updateUserInfo(req, res) {
  try {
    await updateUser(req.params.id, req.body);
    console.log(req.params.id, req.body);
    res.status(204).send("user was updated");
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

async function deleteUser(req, res) {
  try {
    await deleteOne(req.params.id);
    res.status(201).send("user was delete");
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
}

module.exports = {
  getUsersAge,
  getAllUsers,
  getOlderUsers,
  getUsersByAge,
  addNewUser,
  updateUserInfo,
  deleteUser,
};
