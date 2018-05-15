import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuanLySanPham from './QuanLySanPham';
import QuanLyLoaiSanPham from './QuanLyLoaiSanPham';


class App extends Component {


    render() {
        return (
            <Router>
                    <div>
                    <h2>Welcome to Admin Page</h2>
                        <ul>
                        <li><Link to={'/'}>Quản Lý Danh Sách sản phẩm </Link></li>
                        <li><Link to={'/QuanLyLoaiSanPham'}>Quản lý loại sản phẩm</Link></li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={QuanLySanPham} />
                        <Route exact path='/QuanLyLoaiSanPham' component={QuanLyLoaiSanPham} />
                    </Switch>
                    </div>
            </Router>

        );
    }
}
export default App;