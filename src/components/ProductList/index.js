import React from 'react'
import ProductItem from './ProductItem'
function ProductList() {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          <ProductItem />
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
