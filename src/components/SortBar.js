import React from 'react'
function SortBar() {
  return (
    <div className="col-sm-6">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
        >
          請選擇排序 <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu">
          <li>
            <a href="#/">以價格排序 由低到高</a>
          </li>
          <li>
            <a href="#/">以價格排序 由高到低</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SortBar
