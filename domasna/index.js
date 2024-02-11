const express = require("express");
const app = express();
const {
  getUsersAge,
  getAllUsers,
  getOlderUsers,
  getUsersByAge,
  addNewUser,
  updateUserInfo,
  deleteUser,
} = require("./controllers/users");
const { connectDb } = require("./db/config");

connectDb();

app.get("/", getAllUsers);
app.get("/age/:age", getUsersAge);
app.get("/older/:age", getOlderUsers);
app.get("/sortedage", getUsersByAge);
app.post("/", addNewUser);
app.put("/:id", updateUserInfo);
app.delete("/:id", deleteUser);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
