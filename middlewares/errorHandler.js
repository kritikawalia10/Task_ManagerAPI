const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err.stack);

  res.status(err.statusCode || 500).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
