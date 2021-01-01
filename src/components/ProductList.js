import React from 'react'
import ProductRow from '../components/ProductRow'

const ProductList = props => {

    return (
        <div class="border-solid mt-2 border-t border-dividerGray">
                <div>
                    {props.products.map((product) => {
                        return <ProductRow isFeedView={props.isFeedView} key={product._id} product={product} />
                    })}
                </div>                                                        
        </div>
    )
}

export default ProductList;