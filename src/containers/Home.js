import React from 'react'
import ComposeHeader from '../components/ComposeHeader'
import Post from '../components/Post'

const Home = () => {
    return (
        <div class="bg-bgPrimary h-screen">
            <ComposeHeader />
            <Post />
            {/* <ComposeHeader />
            <Feed /> */}
        </div>
    );
}

export default Home;