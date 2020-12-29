import React from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Login from './Login'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import Signup from './Signup'
import Feed from '../components/Feed'

const Home = props => {
    return (
        <div class="flex justify-center items-start h-screen">
            
            <div class="sticky top-0">
                <Sidebar />
            </div>

            <div class="w-600px border-solid border-l border-r border-dividerGray h-screen">
                <ComposeHeader />
                <Feed />

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