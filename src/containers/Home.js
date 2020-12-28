import React from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Login from '../components/Login'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import Signup from '../components/Signup'

const Home = props => {
    return (
        <div class="flex justify-center items-start">
            
            <div class="sticky top-0">
                <Sidebar />
            </div>

            <div class="max-w-lg border-solid border-l border-r border-textgray ">
                <ComposeHeader />
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
                <Post />
                <Post />
            </div>            
            
            
            {/* <Signup />    
            <Login /> */}                                            
            {/* <ComposeHeader />
            <Feed /> */}
        </div>
    );
}

export default Home;