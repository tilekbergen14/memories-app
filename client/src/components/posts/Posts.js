import React from 'react'
import Post from "./post/Post"
import useStyles from "./styles"
import { useSelector } from "react-redux"

export default function Posts() {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)
    console.log(posts)

    return (
        <div>
            posts
            <Post />
            <Post />
            <Post />
        </div>
    )
}
