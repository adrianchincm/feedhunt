import React, {useState, useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import ProductList from './ProductList'
import CircularProgress from '@material-ui/core/CircularProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { LoadingOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { modalStyles, getModalStyle } from '../styles/materialui'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'


const ProductDetailsModal = props => {    
    const [modalStyle] = useState(getModalStyle);
    // const [products, setProducts] = useState(null)

    const classes = modalStyles();

    // useEffect(() => {
    //     getUserProducts()
    // }, [])

    // const getUserProducts = async () => {                   
    //     try {
    //         const productsResponse = await authApi(END_POINTS.products)            
    //         setProducts(productsResponse)                        
    //     } catch (e) {
    //         console.log(e)
    //     }                
    // }

    const onAddToCartClicked = () => {

    }

    const body = (
        <div style={modalStyle} className={classes.paper} >          
          <div class="flex overflow-auto">
                <p class="flex-1 font-bold text-2xl">
                    {props.product.title}
                </p>
            
                <Button 
                    type="primary"
                    shape="round"                         
                    size="large"
                    disabled={props.loading}                                                                                        
                    onClick={() => onAddToCartClicked()}>
                        <div class="flex items-center">
                        {props.loading ? <LoadingOutlined /> : <AddShoppingCartIcon />}

                        <div class="pl-2">
                            <FormattedMessage id="add-to-cart" />
                        </div>                       
                        
                        </div>                                        
                </Button>                    
            </div>

            <div class="mt-4"><img class="rounded-3xl mb-4 m-0" src={props.product.imageURL} alt="uploadedImage"/></div>

            <p class="text-green">RM {props.product.price}</p>

            <p class="text-textgray">{props.product.description}</p>
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