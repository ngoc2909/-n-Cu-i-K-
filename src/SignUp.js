import React, { Component } from 'react';
class SignUp extends Component {
    render () {
        return (
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
            <form className="demoForm">
       <h2>Sign up</h2>
        <div className="form-group">
         <label htmlFor="email">Email address</label>
        <input type="email" className="form-control"
    name="email" />
    </div>
        <div className="form-group">
         <label htmlFor="password">Password</label>
        <input type="password" className="form-control"
    name="password" />
    </div>
        <button type="submit" className="btn btn-primary">
    Sign up
    </button>
    </form>
                        </div></div></div>
            </div>

    )
    }
}
export default SignUp;