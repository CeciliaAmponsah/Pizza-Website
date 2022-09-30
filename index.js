const express = require("express");
const userRouter = require("./routes/users.routes");
const { globalMiddleWare } = require("./middleWares/globalMiddleWare");

const app = express();

app.use(globalMiddleWare);
app.get("/", (req, res) => {
  res
    .status(200)
    .send("Welcome to my sever. Please use/users to get all users");
});
app.use("/users", userRouter);

app.listen(4000, (err) => {
  console.log("server listening on http://localhost:4000");
});
