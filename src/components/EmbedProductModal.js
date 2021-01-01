import React, {useState, useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import ImageIcon from '@material-ui/icons/Image';
import ProductList from './ProductList'
import CircularProgress from '@material-ui/core/CircularProgress';
import {FormattedMessage} from 'react-intl';
import { modalStyles, getModalStyle } from '../styles/materialui'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'


const AddProductModal = props => {    
    const [modalStyle] = React.useState(getModalStyle);
    const [products, setProducts] = useState(null)

    const classes = modalStyles();

    useEffect(() => {
        getUserProducts()
    }, [])

    const getUserProducts = async () => {                   
        try {
            const productsResponse = await authApi(END_POINTS.products)            
            setProducts(productsResponse)                        
        } catch (e) {
            console.log(e)
        }                
    }

    const body = (
        <div style={modalStyle} className={classes.paper} >          
          <p class="font-bold">
            <FormattedMessage id="choose-a-product" />
          </p>

          {products ? <ProductList products={products} onProductClick={props.onProductClick}/> : <CircularProgress />}
        </div>
    );

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose} >
            {body}
        </Modal>
    )
}

export default AddProductModal