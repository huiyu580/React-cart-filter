import React from 'react'
function SearchBar() {
  return (
    <div className="input-group">
      <input type="text" className="form-control" value="以商品名稱搜尋" />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button">
          <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  )
}

export default SearchBar