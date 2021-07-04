import React, { useState } from 'react'
import PriceFilter from './priceFilter'
import TagFilter from './tagFilter'
function Filterbar(props) {
  // console.log(props.priceRangeTags)
  const {
    priceRangeTags,
    priceRange,
    setPriceRange,
    typeTags,
    types,
    setTypes,
  } = props
  return (
    <div className="col-md-3">
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button className="btn btn-secondary">重設</button>
      <hr />
      {/* 篩選價格 */}
      <h3>價格</h3>
      {priceRangeTags.map((value, i) => {
        return (
          <PriceFilter
            key={i}
            value={value}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        )
      })}

      <div className="padding"></div>
      <hr />
      <h3>標籤</h3>
      {typeTags.map((value, i) => {
        return (
          <TagFilter key={i} value={value} types={types} setTypes={setTypes} />
        )
      })}
    </div>
  )
}

export default Filterbar
