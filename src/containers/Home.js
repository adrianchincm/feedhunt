import React, {useState, useEffect} from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Profile from '../containers/Profile'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import {connect} from 'react-redux';
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

    const componentRouter = () => {

        if (props.location.pathname.includes('/user/')) {
                const path = props.location.pathname
                const username = path.substring(path.lastIndexOf('/') + 1)
                return (                
                    <Profile goBack={props.history.goBack} username={username}/>
                )
            }

        switch(props.location.pathname) {
            case '/home': {
                return (
                    <div>
                        <ComposeHeader refreshFeed={fetchPosts}/>
                        <Feed posts={posts}/>
                    </div>
                ) 
            }            
            case '/profile': {
                return (                
                    <Profile goBack={props.history.goBack} username={props.user.username}/>
                )
            }
            default: return
        }        
    }

    return (
        <div class="flex justify-center items-start">
            
            <div class="sticky top-0">
                <Sidebar refreshFeed={fetchPosts} />
            </div>

            <div class="w-600px border-solid border-l border-r border-dividerGray min-h-screen ">

                {componentRouter()}
            
            </div>            
                        
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.user,        
    }
}
  
export default connect(mapStateToProps, null)(Home);