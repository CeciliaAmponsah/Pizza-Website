const pathMiddleWare = (req, res, next) => {
  console.log("Path middleWare started");
  next();
  console.log("Path middleWare ended");
};

module.exports = {
  pathMiddleWare,
};
