import React from 'react'
import avatarTest from '../images/img_avatar.png';
import { timeSince } from '../shared/utility'

const Post = props => {
    
    return (
        <div class="flex flex-row justify-left p-2 cursor-pointer items-center
        transition duration-300 ease-in-out hover:bg-bgPrimaryLight 
        border-solid border-b border-dividerGray">
             <img src={props.post.owner.avatar}                                     
                    alt="avatar"
                    class="rounded-full w-50px h-50px "
                    />
            <div class="flex flex-col ml-4 text-left">
                <div class="flex"> 
                    <p class="font-bold mb-0">{props.post.owner.username}</p>
                    <p class="ml-2 mb-0 text-textgray">{props.post.owner.username}</p>
                    <span class="ml-2 text-textgray">|</span>
                    <p class="ml-2 mb-0 text-textgray">{timeSince(new Date(props.post.createdAt))}</p>
                </div>               
                
                <p class="">{props.post.content}</p>                
            </div>
        </div>
    );
}

export default Post;