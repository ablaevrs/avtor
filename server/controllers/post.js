import Post from "../model/Post";

export const addPost = async (req, res) => {

}

export const deletePost = async (req, res) => {

}

export const updatePost = async (req, res) => {

}

export const getAllPosts = async (req, res) => {
    try {
        const posts = Post.find()
        return res.status(200).send({
            success: true, 
            message: 'Successfull',
            posts,
        })
    } catch (error) {
        res.status(403).json({
            message: 'Error during getting posts'
        })
    }
}

export const getPost = async (req, res) => {
    try {
        const postId = req.params.id
        const post = Post.findById({ postId })

        if (post) {
            return res.status(200).send({
                success: true, 
                message: 'Successfull',
                post,
            })
        } else {
            return res.status(403).send({
                success: true, 
                message: 'Post not found',
            })
        }
    } catch (error) {
        res.status(403).json({
            message: 'Error during getting post by id'
        })
    }
}