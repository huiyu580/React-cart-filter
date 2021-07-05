import React from 'react'
function ProductItem(props) {
  const { id, picture, name, price, tag } = props
  return (
    <tr>
      <td className="number text-center">{id}</td>
      <td className="image">
        <img src={picture} alt="" />
      </td>
      <td className="product">
        <strong>{name}</strong>
        <br />
        {tag}
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
      <td className="price text-right">{price}</td>
    </tr>
  )
}

export default ProductItem
