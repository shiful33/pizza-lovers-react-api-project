import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({ productsPromise }) => {
    const productsData = use(productsPromise);
    const products = productsData.products;
    

    return (
        <div>
            <h1>Pizza Lovers: {products.length}</h1>

            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;