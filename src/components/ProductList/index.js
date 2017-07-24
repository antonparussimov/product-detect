import React from 'react'
import Product from '../Product'

const ProductList = ({products, compare}) =>
  <div>
    <div className="row mt-3">
        {products.map(product =>
          <Product key={product.id} product={product} compare={compare} />
        )}
    </div>
  </div>;

export default ProductList;
