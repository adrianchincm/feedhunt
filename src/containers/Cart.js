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

    useEffect(() => {
        getUserCart()
    }, [])

    const getUserCart = async () => {                   
        try {
            const productsResponse = await authApi(END_POINTS.cart)            
            setCart(productsResponse)                        
        } catch (e) {
            console.log(e)
        }                
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

            {cart && 
                <div class="mt-4">
                    {cart.items.map((item) => {
                        return <CartItem item={item} key={item._id} />
                    })}
                </div>}
        </div>
        </ThemeProvider>
    )

}

export default Cart;