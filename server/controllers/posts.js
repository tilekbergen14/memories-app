import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try{
        const posts = await PostMessage.find()
        res.json(posts)
    }
    catch(err){
        res.status(404).json(err.message)
    }
}

export const createPost = async (req, res) => {
    const {title, creator, message, tags, selectedFile} = req.body
    const post = new PostMessage({title, creator, message, tags, selectedFile})
    try {
        const result = await post.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(409).json(error.message)
    }
}