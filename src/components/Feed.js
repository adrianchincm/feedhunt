import React, {useState, useEffect}  from 'react'
import { authApi } from '../shared/api'
import Post from './Post'

const Feed = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const posts = await authApi('/posts')
        setPosts(posts)
    }

    useEffect(() => {
        fetchPosts()         
    }, [])

    return (
        <div class="border-solid mt-2 border-t border-dividerGray">
            {/* <p>Amount of posts : {posts.length}</p> */}
            {posts.map((post) => {
                return <Post post={post} />
            })}
        </div>
    )
}

export default Feed;