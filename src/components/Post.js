import React from 'react'
import avatar from '../images/user.png'
import { timeSince } from '../shared/utility'
import { useHistory } from "react-router-dom";
import ProductPost from './ProductPost';

const Post = props => {
    
    const history = useHistory();

    const goToUser = (username) => {
        history.push(`/user/${username}`);
    }

    return (
        <div class="flex flex-row justify-left p-2 cursor-pointer items-start py-4
        transition duration-300 ease-in-out hover:bg-bgPrimaryLight 
        border-solid border-b border-dividerGray">
             <img src={props.post.owner.avatar || avatar}                                     
                    alt="avatar"
                    class="rounded-full w-50px h-50px "
                    />
            <div class="flex flex-col ml-4 text-left">
                <div class="flex"> 
                    <p class="font-bold mb-0 hover:underline" 
                        onClick={() => goToUser(props.post.owner.username)}>{props.post.owner.displayname}</p>
                    <p class="ml-2 mb-0 text-textgray">{props.post.owner.username}</p>
                    <span class="ml-2 text-textgray">|</span>
                    <p class="ml-2 mb-0 text-textgray">{timeSince(new Date(props.post.createdAt))}</p>
                </div>               
                
                <p class="">{props.post.content}</p>

                <div class="space-y-4">
                    {props.post.imageURL ? 
                        <img src={props.post.imageURL} 
                        class="rounded-3xl max-w-500px w-full"
                        alt="attachedImage"></img> : null }

                    {props.post.products.map((product) => {
                        return <ProductPost product={product} />       
                    })}       
                </div>
                
            </div>
        </div>
    );
}

export default Post;