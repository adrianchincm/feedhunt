import React from 'react'
import iphone from '../images/iphone.jpeg'
import { useHistory } from "react-router-dom";

const ProductPost = props => {
    
    const history = useHistory();

    const goToProductPage = (username) => {
        // history.push(`/user/${username}`);
    }

    return (
        <div class="flex flex-col justify-left cursor-pointer items-start
        transition duration-300 ease-in-out hover:bg-bgPrimaryLighter 
        border-solid border rounded-xl border-dividerGray">
             <img src={props.product.imageURL}                                     
                    alt="avatar"
                    class="w-500px h-265px rounded-tl-xl rounded-tr-xl"
                    />
            <div class="flex flex-col ml-4 text-left my-2">               
               <p class="mb-0 text-green">RM {props.product.price}</p>
               <p class="mb-0">{props.product.title}</p>
               <p class="mb-0 text-textgray">{props.product.description}</p> 
            </div>
        </div>
    );
}

export default ProductPost;