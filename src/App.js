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

  // 價格checkbox
  const [priceRange, setPriceRange] = useState(['所有'])
  const priceRangeTags = ['所有', '1 萬以下', '1 ~ 2 萬']

  // 標籤checkbox
  const typeTags = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']
  const [types, setTypes] = useState([])

  // 搜尋欄位
  const [searchInput, setSearchInput] = useState('')

  // 排序欄位
  const [sort, setSort] = useState([])
  //
  // 頁面載入
  useEffect(() => {
    // 將抓到的data存入state
    setProducts(data)
  }, [])

  function handlePriceRange(priceRange, products) {
    let newProducts = []
    switch (priceRange) {
      case '所有':
        newProducts = [...products]
        break
      case '1 萬以下':
        newProducts = [...products].filter((item) => {
          return item.price < 10000
        })
        break
      case '1 ~ 2 萬':
        newProducts = [...products].filter((item) => {
          return item.price >= 10000 && item.price < 20000
        })
        break
      default:
        break
    }
    return newProducts
  }

  function handleTypeTags(types, products) {
    let newProducts = [...products]

    if (types.length > 0) {
      newProducts = newProducts.filter((product) => {
        let isFound = false
        let tagArr = product.tags.split(',')
        for (let i = 0; i < tagArr.length; i++) {
          if (types.includes(tagArr[i])) {
            isFound = true
          }
        }
        return isFound
      })
    }
  }

  function handleSearchInput(searchInput, products) {
    let newProducts = [...products]

    if (searchInput !== '') {
      newProducts = newProducts.filter((product) => {
        return product.name.includes(searchInput)
      })
    }
  }

  function handleSort(sort, products) {
    let newProducts = [...products]
    switch (sort) {
      case 0:
        newProducts.sort((a, b) => {
          return a.id - b.id
        })
        break
      case 1:
        newProducts.sort((a, b) => {
          return a.price - b.price
        })
        break
      case 2:
        newProducts.sort((a, b) => {
          return b.price - a.price
        })
        break
      default:
        break
    }
  }
  // 每次資料有變動時
  useEffect(() => {
    let newProducts = []
    handlePriceRange(priceRange, products)
    handleTypeTags(types, newProducts)
    handleSearchInput(searchInput, newProducts)
    handleSort(sort, newProducts)
    setFoundProducts(newProducts)
  }, [priceRange, types, searchInput, sort, products])

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
                    <SearchBar
                      searchInput={searchInput}
                      setSearchInput={setSearchInput}
                    />
                    <div className="padding"></div>
                    <div className="row">
                      <SortBar sort={sort} setSort={setSort} />
                    </div>
                    <ProductList
                      foundProducts={foundProducts}
                      setFoundProducts={setFoundProducts}
                    />
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
