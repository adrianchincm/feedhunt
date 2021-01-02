import React, {useState, useEffect} from 'react'
import CartItem from '../components/CartItem'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'

const Cart = props => {

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
        <div>
            {cart && <div><CartItem item={cart.items[0]} /></div>}
        </div>
        
    )

}

export default Cart;