import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  desciption: String,
  view: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Video", videoSchema);
export default model;
