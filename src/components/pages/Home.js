import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return (
                <div id="content-wrapper">
                <div className="container-fluid">

                {/* <!-- Breadcrumbs--> */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to="#">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol>

                {/* <!-- Icon Cards--> */}
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-primary o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fas fa-fw fa-comments"></i>
                        </div>
                        <div className="mr-5">26 New Messages!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-warning o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fas fa-fw fa-list"></i>
                        </div>
                        <div className="mr-5">11 New Tasks!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div className="mr-5">123 New Orders!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="card text-white bg-danger o-hidden h-100">
                        <div className="card-body">
                        <div className="card-body-icon">
                            <i className="fas fa-fw fa-life-ring"></i>
                        </div>
                        <div className="mr-5">13 New Tickets!</div>
                        </div>
                        <Link className="card-footer text-white clearfix small z-1" to="#">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fas fa-angle-right"></i>
                        </span>
                        </Link>
                    </div>
                    </div>
                </div>

                {/* <!-- Area Chart Example--> */}
                <div className="card mb-3">
                    <div className="card-header">
                    <i className="fas fa-chart-area"></i>
                    Area Chart Example</div>
                    <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="30"></canvas>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

                {/* <!-- DataTables Example --> */}
                <div className="card mb-3">
                    <div className="card-header">
                    <i className="fas fa-table"></i>
                    Data Table Example</div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            </tr>
                            <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

                </div>
                {/* <!-- /.container-fluid -->

                <!-- Sticky Footer --> */}
                <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2019</span>
                    </div>
                </div>
                </footer>

                </div>
        );
}
}

export default Home;