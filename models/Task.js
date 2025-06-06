const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  dueDate: {
    type: Date,
  },
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
