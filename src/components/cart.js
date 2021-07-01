import React, { useState } from 'react'
import ItemRow from './itemRow'
// 解構賦值
function Cart(props) {
  const { products, counts, setCount, itemCount } = props
  // console.log(props)
  const setCounts = (newCount, index) => {
    const newCounts = [...counts]
    newCounts[index] = newCount < 1 ? 1 : newCount
    setCount(newCounts)
  }
  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>購物車</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            {itemCount} 個品項
          </div>
        </div>
      </div>
      {products.map((product, index) => (
        <ItemRow
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
          count={counts[index]}
          setCounts={(newCount) => {
            setCounts(newCount, index)
          }}
        />
      ))}

      <div className="back-to-shop">
        <a href="#/">&leftarrow;</a>
        <span className="text-muted">Back to shop</span>
      </div>
    </div>
  )
}
export default Cart
