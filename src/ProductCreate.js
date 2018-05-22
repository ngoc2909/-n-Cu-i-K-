
import React, { Component } from 'react';

class ProductCreate extends React.Component {

    render() {

        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <h2 ref={subtitle => this.subtitle = subtitle}>Thêm Sản Phẩm</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                    <label>Image-link:
                <input type="text" name="image-link"/>
            </label>
            <div>
                <label>Name:
                    <input type="text" name="name"/>
                </label>
            </div>
            <div>
                <label>Description:
                    <input type="text" name="descr"/>
                </label>
            </div>
            <button>Add Product</button>
        </form>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default ProductCreate;