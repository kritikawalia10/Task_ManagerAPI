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

router.use(protect); 

router.route("/")
  .post(createTask)
  .get(getTasks);

router.route("/:id")
  .get(getTaskById)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
