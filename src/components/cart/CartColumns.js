import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid d-none d-lg-block mx-auto ">
        <div className="row">
          <div className="col-10 col-lg-2 text-center">
            <p className="text-uppercase">products</p>
          </div>
          <div className="col-10 col-lg-2 text-center">
            <p className="text-uppercase">name of products</p>
          </div>
          <div className="col-10 col-lg-2 text-center ">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 col-lg-2 text-center">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 col-lg-2 text-center">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 col-lg-2 text-center">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}
