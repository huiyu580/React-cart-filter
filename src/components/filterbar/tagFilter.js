import React from 'react'

function TagFilter(props) {
  const { value, types, setTypes } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            onChange={() => {
              let newTypes = [...types]
              if (newTypes.includes(value)) {
                newTypes.filter((value) => {
                  return !value
                })
              } else {
                newTypes = [value, ...newTypes]
              }
            }}
          />
          {value}
        </label>
      </div>
    </>
  )
}
export default TagFilter
