import React, {useState, useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import Snackbar from './Snackbar';
import ProductList from './ProductList'
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { LoadingOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { modalStyles, getModalStyle } from '../styles/materialui'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST } from '../constants'

const ProductDetailsModal = props => {    
    const [modalStyle] = useState(getModalStyle);
    const [showSnackbarBool, setShowSnackbarBool] = useState(false);
    const [loading, setLoading] = useState(false);
    const classes = modalStyles();

    const addToCart = async () => {                   
        setLoading(true)
        const productObj = {
            product: props.product._id,
            quantity: 1,
            action: "increment"
        }

        try {
            await authApi(END_POINTS.cart, {
                method: HTTP_POST,
                body: JSON.stringify(productObj)
            })           
            setLoading(false)
            showSnackbar()
        } catch (e) {
            console.log(e)
        }                
    }

    const onAddToCartClicked = () => {
        addToCart()
    }

    const hideSnackbar = () => {
        setShowSnackbarBool(false)
    };    

    const showSnackbar = () => {
        setShowSnackbarBool(true)
    };

    const body = (
        <div style={modalStyle} className={classes.paper} >          
          <div class="flex overflow-auto">
                <p class="flex-1 font-bold text-2xl">
                    {props.product.title}
                </p>
            
                {props.showAddToCartButton ? <Button 
                    type="primary"
                    shape="round"                         
                    size="large"
                    disabled={loading}                                                                                        
                    onClick={() => onAddToCartClicked()}>
                        <div class="flex items-center">
                        {loading ? <LoadingOutlined /> : <AddShoppingCartIcon />}

                        <div class="pl-2">
                            <FormattedMessage id="add-to-cart" />
                        </div>                       
                        
                        </div>                                        
                </Button> : null}
            </div>

            <div class="mt-4"><img class="rounded-3xl mb-4 m-0" src={props.product.imageURL} alt="uploadedImage"/></div>

            <p class="text-green">RM {props.product.price}</p>

            <p class="text-textgray">{props.product.description}</p>

            <Snackbar
                message={<FormattedMessage id="added-to-cart" />}
                open={showSnackbarBool}
                handleClose={hideSnackbar}
                type="success"
            />
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

export default ProductDetailsModal