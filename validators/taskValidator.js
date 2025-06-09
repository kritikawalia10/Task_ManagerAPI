const { body } = require("express-validator");

exports.taskValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("status").optional().isIn(["pending", "completed"]).withMessage("Status must be pending or completed"),
  body("dueDate").optional().isISO8601().withMessage("Due date must be a valid date"),
];
