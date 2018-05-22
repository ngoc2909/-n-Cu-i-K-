import React, { Component } from 'react';
import ProductCreate from './ProductCreate';
import Modal from 'react-modal';


class QuanLyNhaSanXuat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3002/api/nhasanxuat")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">Tables</li>
                            </ol>
                            <div className="album py-5 bg-light">
                                <div className="container">

                                    <h2>Quản Lý Nhà Sản Xuất</h2>
                                    <p>
                                        <button onClick={this.openModal}>Add new Product</button>
                                    </p>
                                    {items.map(item => (
                                        <div className="card-body">
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                onRequestClose={this.closeModal}
                                                contentLabel="Example Modal"
                                            >

                                                <button onClick={this.closeModal}>Close</button>
                                                <ProductCreate/>
                                            </Modal>
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%"
                                                       cellSpacing="1" border="1">
                                                    <tr>
                                                        <th>Mã nhà sản xuất</th>
                                                        <th>Image-url</th>
                                                        <th>Tên Nhà sản xuất</th>
                                                        <th>Chức năng</th>

                                                    </tr>
                                                    <tbody>
                                                    <td>{item.mansx}</td>
                                                    <td>
                                                        <div><img className="card-img-top"
                                                                  src={item.image_url}/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{item.name}</p>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button type="button"
                                                                    className="btn btn-sm btn btn-info update-celebrity-class"
                                                                    value="{{id}}">Edit
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-sm btn btn-danger delete-celebrity-class"
                                                                    value="{{id}}">Delete
                                                            </button>
                                                        </div>
                                                        <footer className="sticky-footer">
                                                            <div className="container">
                                                                <div className="text-center">
                                                                    <small>Copyright © Your Website 2018</small>
                                                                </div>
                                                            </div>
                                                        </footer>
                                                        <a className="scroll-to-top rounded" href="#page-top">
                                                            <i className="fa fa-angle-up"></i>
                                                        </a>
                                                    </td>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default QuanLyNhaSanXuat;