import React from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Login from '../components/Login'
import Post from '../components/Post'
import Signup from '../components/Signup'

const Home = () => {
    return (
        <div class="bg-bgPrimary h-screen items-center ">
            <ComposeHeader />
            <Post />
            
            <Signup />    
            <Login />
            
            
            
            
            {/* <ComposeHeader />
            <Feed /> */}
        </div>
    );
}

export default Home;