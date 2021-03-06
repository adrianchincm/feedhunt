import React, {useState, useEffect} from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Profile from '../containers/Profile'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Products from '../containers/Products'
import Cart from "../containers/Cart";
import {connect} from 'react-redux';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import RecommendedUsers from '../components/RecommendedUsers'

const Home = props => {

    useEffect(() => {
        fetchPosts()         
    }, [])

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        try {
            const posts = await authApi(END_POINTS.following_posts)
            setPosts(posts)
        } catch (e) {
            setPosts([])
        }                        
    }

    const componentRouter = () => {

        if (props.location.pathname.includes('/user/')) {
                const path = props.location.pathname
                const username = path.substring(path.lastIndexOf('/') + 1)
                return (                
                    <Profile username={username}/>
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
                    <Profile username={props.user.username}/>
                )
            }
            case '/products': {
                return (                                    
                    <Products />
                )
            }
            case '/cart': {
                return (                                    
                    <Cart />
                )
            }
            default: return
        }        
    }

    return (
        <div class="flex justify-center items-start">
            
            <div class="sticky top-0 w-300px">
                <Sidebar refreshFeed={fetchPosts} />
                <RecommendedUsers />                
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