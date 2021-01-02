import React from 'react'
import avatar from '../images/user.png'
import { useHistory } from "react-router-dom";

const CartItem = ({item: { product }, item: { product: {owner} } },) => {
    // const {product: owner} = props.product
    const onProductClicked = () => {

    }

    return (
        <div>            

        {product && <div class={`flex flex-col justify-left cursor-pointer items-center py-4
        transition duration-300 ease-in-out hover:bg-bgPrimaryLighter 
        border-b border-solid  border-dividerGray`} 
        onClick={() => onProductClicked()}>
            <div class="flex">
                <img src={owner.avatar || avatar}                                     
                    alt="avatar"
                    class="w-50px ml-4 rounded-full"
                    />

                <p>{owner.username}</p>
            </div>

            <div class="flex flex-col ml-4 text-left my-2">
                <img src={product.imageURL}                                     
                        alt="avatar"
                        class="w-96px ml-4 rounded-xl"
                        />
                     
                <p class="mb-0">{product.title}</p>
                <p class="mb-0 text-green">RM {product.price}</p>
            </div>

            <div class="flex flex-row">
                <p>Subtotal : {product.total}</p>
            </div>
            </div>
            }
        
                              
            
        </div>        
    );
}

export default CartItem;