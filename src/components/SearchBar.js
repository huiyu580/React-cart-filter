import React from 'react'
function SearchBar(props) {
  const { searchInput, setSearchInput } = props
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button">
          <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  )
}

export default SearchBar
