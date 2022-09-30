const getUsers = (req, res) => {
  res.status(200).send("All users");
};
const getUser = (req, res) => {
  res.status(200).send("Get single user");
};
const createUser = (req, res) => {
  res.status(200).send("create users");
};
const updateUser = (req, res) => {
  res.status(200).send("update users");
};
const deleteUser = (req, res) => {
  res.status(200).send("delete users");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
