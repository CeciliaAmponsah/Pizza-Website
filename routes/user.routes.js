const router = require("express").Router;
const {
  getUser,
  getUsers,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");
const { pathMiddleWare } = require("../middleWares/pathMiddleWare");

const userRouter = router();

userRouter.route("/").get(pathMiddleWare, getUsers).post(createUser);
userRouter.route("/:userId").get(getUsers).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
