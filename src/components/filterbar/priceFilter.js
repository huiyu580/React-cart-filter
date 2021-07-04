import React from 'react'
function PriceFilter(props) {
  const { value, priceRange, setPriceRange } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            onChange={() => {
              setPriceRange(value)
            }}
            checked={priceRange === value}
          />{' '}
          {value}
        </label>
      </div>
    </>
  )
}

export default PriceFilter
