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

  const updatedTag = (value, types) => {
    let newTypes = [...types]
    if (newTypes.includes(value)) {
      newTypes = newTypes.filter((item) => {
        return item !== value
      })
    } else {
      newTypes = [value, ...newTypes]
    }
    setTypes(newTypes)
  }
  return (
    <div className="col-md-3">
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setTypes([])
          setPriceRange('所有')
        }}
      >
        重設
      </button>
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
          <TagFilter
            key={i}
            value={value}
            types={types}
            setTypes={setTypes}
            updatedTag={updatedTag}
          />
        )
      })}
    </div>
  )
}

export default Filterbar
