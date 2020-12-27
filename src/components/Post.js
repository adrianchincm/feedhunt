import React from 'react'
import avatarTest from '../images/img_avatar.png';

const Post = () => {

    return (
        <div class="flex flex-row justify-center mt-4">
             <img src={avatarTest}                                     
                    alt="avatar"
                    class="rounded-full max-h-12 max-w-12"
                    />
            <div class="flex flex-col ml-4 text-left">               
                <p class="font-bold mb-0">Adrian Chin</p>
                <p class="">I tried KFC's latest tandoori chicken and it was quite disappointing</p>                
            </div>
        </div>
    );
}

export default Post;