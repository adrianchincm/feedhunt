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
             <img src={iphone}                                     
                    alt="avatar"
                    class="w-500px h-265px rounded-tl-xl rounded-tr-xl"
                    />
            <div class="flex flex-col ml-4 text-left my-2">               
               <p class="mb-0 text-green">RM108.90</p>
               <p class="mb-0">iPhone 12 Pro 256 GB</p>
               <p class="mb-0 text-textgray">The latest iPhone comes with the best display</p> 
            </div>
        </div>
    );
}

export default ProductPost;