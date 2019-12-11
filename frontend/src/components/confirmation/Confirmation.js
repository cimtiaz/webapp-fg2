

import React, {useState} from "react";
import { Link } from "react-router-dom";


 function Confirmation({onSubmit}) {





 function onss() {



  //alert("Welcomeeeee");
   let r = window.confirm("Are you sure!");
   let txt="";
    if (r == true) {
       txt= "You pressed OK!";
       console.log("here1");

        window.location.href="/about";
       console.log("here");

    } else {
      txt = "You pressed Cancel!";
    }
    console.log(txt);

  }
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [duration, setDuration] = useState("");
     return (
         <div className="card">
             <div className="card-body">
                 <h4 className="card-title">Thanks for your purchase!</h4>
                 <br/>
                 <p className="big_p">
                 Contract Rules:
                 <li> Once agreed upon, ALL SALES ARE FINAL.<br/></li>
                 <br/>
                During the testing period:<br/>
                <li>When offering an item for sale, the seller will document and describe in writing the condition of the product. <br/></li>
                <li>If the buyer considers that the description of the product doesn't match the condition of the product the buyer must return
                the product right away. </li>
                <li>If the buyer agrees to test the product and wants to return it once the testing period is over, the
                condition of the product must match the documented description. If the product was damaged during the testing period, the
                money will go to the seller.</li>
                <li>Duration of the testing period is agreed by the seller and buyer.</li>
                </p>

                  <div className="form-group">
                         <button onClick={onss}
                            className="btn btn-success float-left">
                            Payment
                         </button>

                  </div>
                  <div className="form-group">
                         <Link to="/about"
                          className="btn btn-success float-right">
                          Reject
                         </Link>
                 </div>

             </div>
         </div>
     );
 }
//hallo

 export default Confirmation;