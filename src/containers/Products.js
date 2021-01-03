import React, {useState, useEffect, Suspense} from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductList from '../components/ProductList';
import AddProductModal from '../components/AddProductModal';
import Snackbar from '../components/Snackbar';
import { backButtonTheme, whiteButtonTheme } from '../styles/materialui'
import { ThemeProvider } from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'
import { useHistory } from "react-router-dom";
import { Button } from 'antd';


const Products = props => {

    const history = useHistory();

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const [open, setOpen] = useState(false)
    const [resetModal, setResetModal] = useState(false)
    const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false)
    const [clickedProduct, setClickedProduct] = useState(null)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const ProductDetailsModal = React.lazy(() => import('../components/ProductDetailsModal'));

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

    const onProductRowClicked = (product) => {
        setClickedProduct(product)
        openProductDetails()
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
        setResetModal(!resetModal)
    };
    
    const onAddProductButtonClicked = async (product) => {
        console.log(product)
        setLoading(true)
        try {
            await authApi(END_POINTS.products, {
                method: HTTP_POST,
                body: product
            })
            setLoading(false)
            handleClose()
            getUserProducts()
            setShowSnackbar(true)
        } catch (e) {
            console.log(e)
        }    
    };

    const openProductDetails = () => {
        setOpenProductDetailsModal(true)
    }

    const handleCloseProductDetails = () => {          
        setOpenProductDetailsModal(false);        
    };

    const hideSnackbar = () => {
        setShowSnackbar(false)
    };  

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div>
            <div class="p-4 flex sticky top-0 bg-bgPrimary z-10 items-center border-solid border-b border-dividerGray">
                <IconButton aria-label="delete" onClick={() => history.goBack()}>
                    <ArrowBackIcon />
                </IconButton>

                
                <div class="flex flex-1 items-center">
                    
                <p class="mb-0 ml-4 font-bold text-xl"><FormattedMessage id="your-products" /></p>
                    {products ? <p class="mb-0 ml-4 text-textgray">{products.length} products</p> : null}
                                                             
                </div>

                <div>

                    <Button 
                        type="primary"
                        shape="round"                         
                        size="large"                                                
                        onClick={() => handleOpen()}>
                        <FormattedMessage
                            id="add-product"          
                        />
                    </Button>

                </div>                    
                                    
            </div>

            <div>
                {products ? 
                    <div>
                        {products.length === 0 ? 
                        <p class="text-textgray mt-4">You have no products added</p> 
                        : <ProductList products={products} onProductClick={onProductRowClicked} isFeedView />}                        
                    </div>
                : 
                <div class="mt-4">
                    <CircularProgress />
                </div>}
            </div>

            <AddProductModal 
                open={open} 
                handleClose={handleClose} 
                addProduct={onAddProductButtonClicked}
                loading={loading}
                reset={resetModal}
                />

            {clickedProduct ? <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailsModal 
                    open={openProductDetailsModal} 
                    handleClose={handleCloseProductDetails} 
                    product={clickedProduct}
                    showAddToCartButton={false}
                    /> 
            </Suspense> : null}
            
            <ThemeProvider theme={whiteButtonTheme}>
            <Snackbar
                message={<p class="mb-0"><FormattedMessage id="product-added" /></p>}
                open={showSnackbar}
                handleClose={hideSnackbar}                
                type="success"
            />
            </ThemeProvider>
        </div>
        </ThemeProvider>
    )

}

export default Products