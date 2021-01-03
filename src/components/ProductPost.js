import React, { Suspense, useState } from 'react'
import iphone from '../images/iphone.jpeg'
// import ProductDetailsModal from './ProductDetailsModal'
import { useHistory } from "react-router-dom";

const ProductPost = props => {
    
    const history = useHistory();
    const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false)
    const ProductDetailsModal = React.lazy(() => import('./ProductDetailsModal'));

    const goToProductPage = () => {
        
        setOpenProductDetailsModal(true)        
    }

    const handleClose = () => {  
        console.log("close")      
        setOpenProductDetailsModal(false);        
    };

    return (
        <div>
             <div class="flex flex-col justify-left cursor-pointer items-start
        transition duration-300 ease-in-out hover:bg-bgPrimaryLighter 
        border-solid border rounded-xl border-dividerGray"
        onClick={() => goToProductPage()}
        >
             <img src={props.product.imageURL}                                     
                    alt="avatar"
                    class="w-500px h-265px rounded-tl-xl rounded-tr-xl"
                    />
            <div class="flex flex-col ml-4 text-left my-2">               
               <p class="mb-0 text-green">RM {props.product.price.toFixed(2)}</p>
               <p class="mb-0">{props.product.title}</p>
               <p class="mb-0 text-textgray">{props.product.description}</p> 
            </div>                   
        </div>

            <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailsModal 
                    open={openProductDetailsModal} 
                    handleClose={handleClose} 
                    product={props.product}
                    showAddToCartButton={true}
                    /> 
            </Suspense>
        </div>
       
    );

    
}

export default ProductPost;