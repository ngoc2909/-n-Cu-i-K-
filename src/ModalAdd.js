import React, {Component} from "react";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

class ModalAdd extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handleImg_urlChange = this.handleImg_urlChange.bind(this);

        this.state = {
            show: false,
            name: null,
            description: null,
            image_url: null
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleAdd() {
        axios.post(`https://app-expressjs1.herokuapp.com/api/banhang`,
            {name: this.state.name, description: this.state.description, image_url: this.state.image_url} )
            .then(res => {
                this.setState({show: false});
                this.props.handleAfterAdd();
            })
    };

    handleNameChange(e) {
        this.setState({name: e.target.value});
    };
    handleDesChange(e) {
        this.setState({description: e.target.value});
    };
    handleImg_urlChange(e) {
        this.setState({image_url: e.target.value});
    };
    handleAfterAdd(){
        fetch("https://app-expressjs1.herokuapp.com/api/banhang")
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
        return (
            <div>
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
                                <form>
                            <label for="input-name" className="sr-only">Name</label>
                            <input id="input-name" className="form-control tooltip-test" title="Celebrity's name" value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required="" autofocus=""/>
                            <label for="input-img_url" className="sr-only">Image url</label>
                            <input id="input-img_url" className="mt-2 form-control" placeholder="Image url" autofocus="" value={this.state.img_url} onChange={this.handleImg_urlChange}/>
                            <label for="input-des" className="sr-only">Description</label>
                            <textarea id="input-des" className="mt-2 form-control" placeholder="Description" type="text" autofocus="" value={this.state.des} onChange={this.handleDesChange}></textarea>
                                </form>
                                        <Modal.Footer>
                                            <Button className="col-2" onClick={this.handleClose}>Close</Button>
                                            <Button className="btn-primary col-2" onClick={this.handleAdd}>Add</Button>
                                        </Modal.Footer>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default ModalAdd;