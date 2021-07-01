import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div class="container">
        <div class="row">
          {/* BEGIN SEARCH RESULT */}
          <div class="col-md-12">
            <div class="grid search">
              <div class="grid-body">
                <div class="row">
                  {/* BEGIN FILTERS */}
                  <div class="col-md-3">
                    <h2 class="grid-title">
                      <i class="fa fa-filter"></i> 過濾
                    </h2>
                    <button class="btn btn-secondary">重設</button>
                    <hr />
                    {/* BEGIN FILTER BY CATEGORY */}
                    <h3>價格</h3>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 所有
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 1 萬以下
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 1 ~ 2 萬
                      </label>
                    </div>
                    {/* END FILTER BY CATEGORY */}
                    <div class="padding"></div>
                    {/* BEGIN FILTER BY DATE */}
                    <h3>標籤</h3>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 大螢幕
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 小螢幕
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 一般螢幕
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 蘋果
                      </label>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="icheck" /> 安卓
                      </label>
                    </div>
                    {/* END FILTER BY PRICE */}
                  </div>
                  {/* END FILTERS */}
                  {/* BEGIN RESULT */}
                  <div class="col-md-9">
                    <h2>
                      <i class="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    {/* BEGIN SEARCH INPUT */}
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        value="以商品名稱搜尋"
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                    {/* END SEARCH INPUT */}

                    <div class="padding"></div>

                    <div class="row">
                      {/* BEGIN ORDER RESULT */}
                      <div class="col-sm-6">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            以價格排序 <span class="caret"></span>
                          </button>
                          <ul class="dropdown-menu" role="menu">
                            <li>
                              <a href="#/">Name</a>
                            </li>
                            <li>
                              <a href="#/">Date</a>
                            </li>
                            <li>
                              <a href="#/">View</a>
                            </li>
                            <li>
                              <a href="#/">Rating</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* END ORDER RESULT */}

                      <div class="col-md-6 text-right">
                        <div class="btn-group">
                          <button type="button" class="btn btn-default active">
                            <i class="fa fa-list"></i>
                          </button>
                          <button type="button" class="btn btn-default">
                            <i class="fa fa-th"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* BEGIN TABLE RESULT */}
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <tbody>
                          <tr>
                            <td class="number text-center">1</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/FF8C00"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 1</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$350</td>
                          </tr>
                          <tr>
                            <td class="number text-center">2</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/5F9EA0"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 2</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$1,050</td>
                          </tr>
                          <tr>
                            <td class="number text-center">3</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 3</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$550</td>
                          </tr>
                          <tr>
                            <td class="number text-center">4</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/8A2BE2"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 4</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$330</td>
                          </tr>
                          <tr>
                            <td class="number text-center">5</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 5</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </span>
                            </td>
                            <td class="price text-right">$540</td>
                          </tr>
                          <tr>
                            <td class="number text-center">6</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/6495ED"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 6</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$870</td>
                          </tr>
                          <tr>
                            <td class="number text-center">7</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/DC143C"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 7</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$620</td>
                          </tr>
                          <tr>
                            <td class="number text-center">8</td>
                            <td class="image">
                              <img
                                src="https://via.placeholder.com/400x300/9932CC"
                                alt=""
                              />
                            </td>
                            <td class="product">
                              <strong>Product 8</strong>
                              <br />
                              This is the product description.
                            </td>
                            <td class="rate text-right">
                              <span>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                              </span>
                            </td>
                            <td class="price text-right">$1,550</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* END TABLE RESULT */}

                    {/* <!-- BEGIN PAGINATION */}
                    <ul class="pagination">
                      <li class="disabled">
                        <a href="#/">«</a>
                      </li>
                      <li class="active">
                        <a href="#/">1</a>
                      </li>
                      <li>
                        <a href="#/">2</a>
                      </li>
                      <li>
                        <a href="#/">3</a>
                      </li>
                      <li>
                        <a href="#/">4</a>
                      </li>
                      <li>
                        <a href="#/">5</a>
                      </li>
                      <li>
                        <a href="#/">»</a>
                      </li>
                    </ul>
                    {/* END PAGINATION */}
                  </div>
                  {/* END RESULT */}
                </div>
              </div>
            </div>
          </div>
          {/* END SEARCH RESULT */}
        </div>
      </div>
    </>
  )
}

export default App
