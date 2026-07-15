const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  message: {
    type: String,
    required: true
  },

  postedDate: {
    type: Date,
    default: Date.now
  }
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;