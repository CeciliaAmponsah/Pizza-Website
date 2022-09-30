const globalMiddleWare = (req, res, next) => {
  console.log("Global middleWare started");
  next();
  console.log("Global middleWare ended");
};

module.exports = {
  globalMiddleWare,
};
