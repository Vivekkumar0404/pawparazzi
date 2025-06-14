import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
    video: String, // Ensure video field exists
  },
  { timestamps: true }
);
var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;