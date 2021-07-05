import React from 'react'
function SortBar(props) {
  const { sort, setSort } = props
  // console.log(sort, setSort)
  return (
    <div className="col-sm-6">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          onClick={() => {
            setSort(0)
          }}
        >
          請選擇排序 <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" role="menu">
          <li>
            <a
              href="#/"
              onClick={() => {
                setSort(1)
              }}
            >
              以價格排序 由低到高
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => {
                setSort(2)
              }}
            >
              以價格排序 由高到低
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SortBar
