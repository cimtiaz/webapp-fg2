import React, { Component } from "react";
import ProductForm from "./ProductForm";
import UploadForm from "./UploadForm";
import ProductApi from "./../../api/ProductApi";
import TransactionApi from "./../../api/TransactionApi";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seller: []
    };
  }


  async createProduct(productData) {
    try {
      const response = await ProductApi.createProduct(productData);
      const newProduct = response.data;

      this.setState({
        product: newProduct
      });
      return newProduct;
    } catch (e) {
      console.error(e);
    }
  }

    async createTransaction(transactionData) {
      try {
        const response = await TransactionApi.createTransaction(transactionData);
        const transaction = response.data;
        const newTransactions = this.state.transaction;

        this.setState({
          transaction: newTransactions
        });
      } catch (e) {
        console.error(e);
      }
    }

    async createSellerAndTransaction(productData){
     const product1 = await this.createProduct(productData);
     await this.createTransaction({
     product: product1
     });
    }

    printName (p) {
        return <h1>{p.productName}</h1>
    }

  render() {

    return (
      <div className="wrapper">
        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12 strong-shadow">
                  <ProductForm
                    onSubmit={productData => this.createSellerAndTransaction(productData)}
                  />
                  <br />



                  <form onSubmit={this._handleSubmit}></form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
