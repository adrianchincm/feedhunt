import React, {useState, useEffect} from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Profile from '../containers/Profile'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'

const Home = props => {

    useEffect(() => {
        fetchPosts()         
    }, [])

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const posts = await authApi(END_POINTS.following_posts)
        
        setPosts(posts)
    }

    const route = (path) => {
        props.history.push(path)
    }

    const componentRouter = () => {
        if (props.location.pathname === '/home') {
            return (
                <div>
                    <ComposeHeader refreshFeed={fetchPosts}/>
                    <Feed posts={posts}/>
                </div>
            )
        } else if (props.location.pathname === '/profile') {
            return (
                <Profile />
            )
        }
    }

    return (
        <div class="flex justify-center items-start h-screen">
            
            <div class="sticky top-0">
                <Sidebar route={route} path={props.location.pathname}/>
            </div>

            <div class="w-600px border-solid border-l border-r border-dividerGray h-screen">

                    {componentRouter()}

                {/* <ComposeHeader refreshFeed={fetchPosts}/>
                <Feed posts={posts}/> */}

                {/* <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post /> */}
            </div>            
            
            
            {/* <Signup />    
            <Login /> */}                                            
            {/* <ComposeHeader />
            <Feed /> */}
        </div>
    );
}

export default Home;