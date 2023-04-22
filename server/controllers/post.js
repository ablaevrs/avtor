import Post from "../model/Post.js";

export const addPost = async (req, res) => {
    try {
        const doc = new Post({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            ownerId: req.userId
        })

        const post = await doc.save()

        res.json(post)
    } catch (error) {
        res.status(500).json({
            message: 'Cant create post'
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id

        Post.findOneAndDelete(
        {
            _id: postId
        }, 
        // ф-ция, которая уже возвращает документ или ошибку
        (err, doc) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error during removing post by id'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Post not found'
                })
            }

            res.json({
                success: true
            })
        })

        if (post) {
            return res.status(200).send({
                success: true, 
                message: 'Successfull',
                post
            })
        } else {
            return res.status(403).send({
                success: true, 
                message: 'Post not found',
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error during getting post by id'
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const postId = req.params.id

        await Post.findOne({
            _id: postId
        }, {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            ownerId: req.userId
        })

        res.json({
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error during updating post'
        })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        // для связи с колл Users указываем связь (тут мб массив связей):
        // через .populate('users')
        const posts = await Post.find().populate('users').exec()

        return res.status(200).send({
            success: true, 
            message: 'Successfull',
            posts,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error during getting posts'
        })
    }
}

export const getPost = async (req, res) => {
    try {
        const postId = req.params.id
        // const post = await Post.findById({ postId }).populate('users').exec()
        // для обновления счетчика посетителей воспользуемся find and update
        Post.findOneAndUpdate(
        // критерии выборки
        {
            _id: postId
        }, 
        // что делаем после выборки (увеличиваем каунтер)
        {
            $inc: { counter: 1 }
        },
        // говорим, что надо вернуть документа уже после обработки
        {
            returnDocument: 'after'
        },
        // ф-ция, которая уже возвращает документ или ошибку
        (err, doc) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error during getting and updating post by id'
                })
            }

            if (!doc) {
                return res.status(404).json({
                    message: 'Post not found'
                })
            }

            res.json(doc)
        })

        if (post) {
            return res.status(200).send({
                success: true, 
                message: 'Successfull',
                post
            })
        } else {
            return res.status(403).send({
                success: true, 
                message: 'Post not found',
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'Error during getting post by id'
        })
    }
}