import React, {useState, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductList from '../components/ProductList';
import { backButtonTheme } from '../styles/materialui'
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

    const openAddProductModal = () => {
        
    }

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div>
            <div class="p-4 flex sticky top-0 bg-bgPrimary z-10 items-center border-solid border-b border-dividerGray">
                <IconButton aria-label="delete" onClick={() => history.goBack()}>
                    <ArrowBackIcon />
                </IconButton>

                
                <div class="flex flex-1 items-center">
                    
                    <p class="mb-0 ml-4 font-bold text-xl">Your products</p>
                    {products ? <p class="mb-0 ml-4 text-textgray">{products.length} products</p> : null}
                                                             
                </div>

                <div>

                    <Button 
                        type="primary"
                        shape="round"                         
                        size="large"                                                
                        onClick={() => openAddProductModal()}>
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
                        : <ProductList products={products} isFeedView />}                        
                    </div>
                : 
                <div class="mt-4">
                    <CircularProgress />
                </div>}
            </div>
        </div>
        </ThemeProvider>
    )

}

export default Products