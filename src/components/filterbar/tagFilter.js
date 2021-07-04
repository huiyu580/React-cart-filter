import React from 'react'

function TagFilter(props) {
  const { value, types, updatedTag } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            onChange={() => {
              updatedTag(value, types)
            }}
            checked={types.includes(value)}
          />
          {value}
        </label>
      </div>
    </>
  )
}
export default TagFilter
