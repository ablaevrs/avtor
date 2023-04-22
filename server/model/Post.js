import mongoose, { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    image: {
        type: String
    },
    counter: {
        type: Number,
        default: 0
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {
    timestamps: true
})

const Post = model('Post', PostSchema)
export default Post