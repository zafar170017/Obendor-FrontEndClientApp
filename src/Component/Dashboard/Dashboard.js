import React, { Component } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './Image/main.png';
class Dashboard extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-9">
                <div className='row'>

                    <div class="col-lg-7 pl-3 pt-2 pb-2 pr-2 back1" style={{ backgroundImage: `url(${background})` }}>
                        <div class="greeting mt-4 pl-4">
                            <h3>
                                Good Evening, Manda
                            </h3>
                            <h4 class="text-muted w-50 fw-normal">
                                Here's what's happening with your store today.
                            </h4>


                        </div>

                        <div class="row store-insight pl-4">
                            <div class="col-5">
                                <div>
                                    <h5 className="head1">Today's Sales</h5>
                                    </div>
                                <h4 class="fw-normal">
                                    $8900.00
                                </h4>
                            </div>
                            <div class="col-5">
                                <div>
                                    <h5 className="head1">Today's Visits</h5>
                                    </div>
                                <h4 class="fw-normal">
                                    37849
                                </h4>
                            </div>

                        </div>
                        <div class="row mt-4">
                            <div class="col-12">
                                <div class="card border-warning-light m-4 p-2 bg-warning-light shadow-sm">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item bg-warning-light">
                                            <span class="d-block mb-2 fw-bold"> 10 tips to increase sales!.</span>
                                            <p>
                                                Here are some basic steps you can take to improve your sales performance, reduce your cost of selling, and ensure your great business.
                                            </p>
                                            <a href="#" class="btn btn-link text-primary pl-0">Learn more</a>
                                        </li>
                                        <li class="list-group-item bg-warning-light">
                                            <span class="d-block mb-2 fw-bold"> Get more customers!</span>
                                            <p>
                                                Learn how to get more customers with this step-by-step guide from expert marketers!
                                            </p>
                                            <a href="#" class="btn btn-link text-primary pl-0">Learn more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 pt-2 pb-2 bg-white shadow-sm border-left border-white">
                    <div class="row p-4">
                <div class="col-md-6 mb-1 mb-sm-0">
                  <select class="form-control" name="" id="">
                    <option value="1">All Channel</option>
                    <option value="2">Front store</option>
                    <option value="3">Mobile</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select class="form-control" name="" id="">
                    <option value="1">Today</option>
                    <option value="2">Last 7 Days</option>
                    <option value="3">This Month</option>
                  </select>
                </div>
              </div>
              <hr class="m-0"/>
              <div class="row p-4">
                <div class="col-md-6">
                    <small class="fw-bold">TOTAL SALES</small>
                    <h4 class="fw-normal">$33,400.00</h4>
                </div>
                <div class="col-md-6 text-right text-muted">
                    <span class="d-block">Jun 1</span>
                    <span>239 orders</span>
                </div>
              </div>
              <small class="fw-bold mx-4">TOTAL SALES BY CHANNEL</small>
              <hr/>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="row">
                      <div class="col-md-6">
                        <span>Front Store</span>
                        <h5 class="mt-2">$44,430.00</h5>
                      </div>
                      <div class="col-md-6 text-right">
                        <a href="#" class="btn btn-link text-right d-block p-0">View dashboard</a>
                        <span class="text-muted">445,342 orders</span>
                      </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                      <div class="col-md-6">
                          <span>Mobile Store</span>
                          <h5 class="mt-2">$3,932.00</h5>
                        </div>
                        <div class="col-md-6 text-right">
                          <a href="#" class="btn btn-link text-right d-block p-0">View dashboard</a>
                          <span class="text-muted">32,322 orders</span>
                        </div>
                  </div>
                </li>
              </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;