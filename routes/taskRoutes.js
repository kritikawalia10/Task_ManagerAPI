const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(protect); // All routes below are protected

router.route("/")
  .post(createTask)     // Create
  .get(getTasks);       // Read all

router.route("/:id")
  .get(getTaskById)     // Read one
  .put(updateTask)      // Update
  .delete(deleteTask);  // Delete

module.exports = router;
