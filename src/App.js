import React, { useEffect, useState } from 'react'
import './App.css'
import Filterbar from './components/filterbar/'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'
import ProductList from './components/ProductList/'
import { data } from './data'

function App() {
  // 所有商品資料
  const [products, setProducts] = useState([])

  // 篩選後的新陣列
  const [foundProducts, setFoundProducts] = useState([])

  const [priceRange, setPriceRange] = useState(['所有'])
  const priceRangeTags = ['所有', '1 萬以下', '1 ~ 2 萬']

  const typeTags = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']
  const [types, setTypes] = useState([])
  // 頁面載入
  useEffect(() => {
    // 將抓到的data存入state
    setProducts(data)
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <Filterbar
                    typeTags={typeTags}
                    priceRangeTags={priceRangeTags}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    types={types}
                    setTypes={setTypes}
                  />
                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar />
                    <div className="padding"></div>
                    <div className="row">
                      <SortBar />
                    </div>
                    <ProductList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
