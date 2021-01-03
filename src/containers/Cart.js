import React, {useState, useEffect} from 'react'
import CartItem from '../components/CartItem'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { backButtonTheme } from '../styles/materialui'
import { ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

const Cart = props => {

    const history = useHistory()
    const [cart, setCart] = useState(null)
    const [emptyCart, setEmptyCart] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getUserCart()
    }, [])

    const getUserCart = async () => {                   
        try {
            const productsResponse = await authApi(END_POINTS.cart)
            setLoader(false)
            if (productsResponse.items.length === 0) {
                setEmptyCart(true)
            } else (
                setCart(productsResponse)
            )
            
        } catch (e) {
            console.log(e)
        }                
    }

    const setUpdatedCart = (updatedCart) => {        
        setCart(updatedCart);
    } 

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div>
            <div class="p-4 flex sticky top-0 bg-bgPrimary z-10 items-center border-solid border-b border-dividerGray">
                <IconButton aria-label="delete" onClick={() => history.goBack()}>
                    <ArrowBackIcon />
                </IconButton>

                
                <div class="flex flex-1 items-center">
                    
                    <p class="mb-0 ml-4 font-bold text-xl"><FormattedMessage id="cart" /></p>
                    {cart ? <p class="mb-0 ml-4 text-textgray">{cart.items.length} <FormattedMessage id="items" /></p> : null}
                                                             
                </div>                                
                                    
            </div>

            {emptyCart && <p class="mt-4 text-textgray">Your cart is empty</p>}
            {loader ? <div class="mt-4"><CircularProgress /></div> : null}

            {cart ? 
                <div class="mt-4">
                    {cart.items && cart.items.map((item, i) => {
                        return <CartItem item={item} key={item._id} index={i} setUpdatedCart={setUpdatedCart}/>
                    })}
                </div> : null}

                {cart ? <div class="p-4 box-border w-598px flex fixed bottom-0 bg-bgPrimary z-10 items-center border-solid border-t border-dividerGray">               
                    <div class="flex flex-1 items-center">                        
                        <p class="mb-0 ml-4 font-medium text-xl text-textgray"><FormattedMessage id="cart-total" /> : </p>
                        <p class="mb-0 ml-4 text-xl font-bold">RM {cart.grandTotal.toFixed(2)}</p> 
                                                                
                    </div>                                                                    
                </div> : null }   
        </div>
        </ThemeProvider>
    )

}

export default Cart;