import React, {Suspense, useState} from 'react'
import avatar from '../images/user.png'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { backButtonTheme } from '../styles/materialui';
import { FormattedMessage } from 'react-intl';

const CartItem = ({item, item: { product }, item: { product: {owner} } },) => {

    const history = useHistory()
    const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false)
    const ProductDetailsModal = React.lazy(() => import('./ProductDetailsModal'));

    const onProductTitleClicked = () => {
        setOpenProductDetailsModal(true)
    }

    const handleClose = () => {  
        console.log("close")      
        setOpenProductDetailsModal(false);        
    };

    const onSellerClicked = () => {
        history.push(`/user/${owner.username}`)
    }

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div>            
        
        {product && <div class={`flex flex-col justify-left py-4 mb-4
        transition duration-300 ease-in-out 
        border-b border-t border-solid  border-dividerGray`} 
        >
            <div class="flex items-center border-b border-solid border-dividerGray pb-4">
                <img src={owner.avatar || avatar}                                     
                    alt="avatar"
                    class="w-30px ml-4 rounded-full"
                    />

                <p class="ml-4 mb-0 font-medium hover:underline cursor-pointer"
                    onClick={() => onSellerClicked()}>
                        {owner.username}
                </p>
            </div>

            <div class="flex text-left mt-4 ">
                <img src={product.imageURL}                                     
                        alt="avatar"
                        class="w-96px ml-4 rounded-xl"
                        />

                <div class="ml-4 flex-1">     
                    <p class="mb-0 hover:underline cursor-pointer"
                        onClick={() => onProductTitleClicked()}
                        >
                        {product.title}
                    </p>
                    <p class="mb-0 text-green">RM {product.price}</p>
                </div>

                <div class="flex items-center">
                    <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        >
                        <AddIcon />
                    </IconButton>

                    <p class="mb-0">{item.quantity}</p>

                    <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        >
                        <RemoveIcon />
                    </IconButton>
                </div>
               
            </div>

          
            <div class="flex flex-row ml-4 mt-2">
                <p class="mb-0">
                    <span class="text-textgray font-medium"><FormattedMessage id="subtotal" ß/> : </span>
                    RM {item.total.toFixed(2)}
                </p>
            </div>
            </div>
            }
                                                  
        </div>

        <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailsModal 
                    open={openProductDetailsModal} 
                    handleClose={handleClose} 
                    product={product}
                    showAddToCartButton={false}
                    /> 
        </Suspense>
        </ThemeProvider>        
    );
}

export default CartItem;