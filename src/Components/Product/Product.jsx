import React from 'react';

const Product = ({ product }) => {
    console.log(product.images.selected.front.fr)
    return (
        <div>
            <h2>Item Name: </h2>
        </div>
    );
};

export default Product;