import React from 'react'
import ProductRow from '../components/ProductRow'

const ProductList = props => {

    return (
        <div class={`border-solid mt-2 ${props.isFeedView ? "border-t" : ""} border-dividerGray`}>
                <div>
                    {props.products.map((product) => {
                        return <ProductRow 
                            isFeedView={props.isFeedView} 
                            key={product._id} 
                            product={product}
                            onProductClick={props.onProductClick}
                            />
                    })}
                </div>                                                        
        </div>
    )
}

export default ProductList;