import React from 'react'
function ProductItem(props) {
  console.log(props)
  return (
    <tr>
      <td className="number text-center">1</td>
      <td className="image">
        <img src="https://via.placeholder.com/400x300/FF8C00" alt="" />
      </td>
      <td className="product">
        <strong>Product 1</strong>
        <br />
        This is the product description.
      </td>
      <td className="rate text-right">
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </span>
      </td>
      <td className="price text-right">$350</td>
    </tr>
  )
}

export default ProductItem
