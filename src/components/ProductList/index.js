import React from 'react'
import ProductItem from './ProductItem'
function ProductList(props) {
  const { foundProducts, setFoundProducts } = props
  console.log(foundProducts)
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          {foundProducts.map((value, i) => {
            return (
              <ProductItem
                key={value.id}
                id={value.id}
                picture={value.picture}
                name={value.name}
                price={value.price}
                tag={value.tags}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// id: '1',
// picture: 'http://placehold.it/32x32',
// stock: 5,
// name: 'iPhone 12 Pro',
// price: 25000,
export default ProductList
