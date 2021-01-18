import mongoose from "mongoose"

const schema = mongoose.Schema({
    message: String,
    title: String,
    tags: [String],
    createdAt: {type: Date, default: new Date()},
    creator: String,
    selectedFile: String,
    likeCount: {type: Number, default: 0}
})

const PostMessage = mongoose.model("PostMessage", schema)

export default PostMessage