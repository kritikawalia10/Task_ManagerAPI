const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validateMiddleware");
const { taskValidator } = require("../validators/taskValidator");

router.use(protect);

router.route("/")
  .post(taskValidator, validate, createTask)
  .get(getTasks);

router.route("/:id")
  .get(getTaskById)
  .put(taskValidator, validate, updateTask)
  .delete(deleteTask);

module.exports = router;
