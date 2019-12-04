import React, { Component } from "react";
import SellerForm from "./SellerForm";
import UploadForm from "./UploadForm";
import SellerApi from "./../../api/SellerApi";

class SellerPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seller : []
        };
    }

    async createSeller(sellerData) {
        try {
            const response = await SellerApi.createSeller(sellerData);
            const seller = response.data;
            const newSellers = this.state.seller;

            this.setState({
                seller: newSellers,
            });
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        return (
             <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 strong-shadow">
                                   <SellerForm onSubmit={(sellerData) => this.createSeller(sellerData)}/>
                                    <form onSubmit={this._handleSubmit} >
                                                         </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
             </div>

        );
    }
}

export default SellerPage;