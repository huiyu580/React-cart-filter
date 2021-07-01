import React, {useState} from 'react'
function Summary(props) {
  const {itemCount, total} = props
  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>目前品項</b>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{ paddingLeft: '0' }}>
          共 {itemCount} 項
        </div>
        <div className="col text-right"></div>
      </div>
      <div
        className="row"
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '2vh 0',
        }}
      >
        <div className="col">總價</div>
        <div className="col text-right">{total}</div>
      </div>
      <button className="btn">結帳</button>
    </div>
  )
}

export default Summary
