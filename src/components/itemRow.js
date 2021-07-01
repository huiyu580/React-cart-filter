import React from 'react'

function ItemRow(props) {
  const { category, name, price, image, count, setCounts } = props
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a href="#/" onClick={() => {
                setCounts(count - 1)
              }}>
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a href="#/" onClick={() => setCounts(count + 1)}>
              +
            </a>
          </div>
          <div className="col">
            &euro; {price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemRow
