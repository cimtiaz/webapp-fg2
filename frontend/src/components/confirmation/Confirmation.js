

 import React, {useState} from "react";
 function Confirmation({onSubmit}) {
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [duration, setDuration] = useState("");
     return (
         <div className="card">
             <div className="card-body">
                 <h4 className="card-title">Thanks for your purchase!</h4>
                 <div>
                     <div className="form-group">
                         <input
                             type="text"
                             className="form-control"
                             value={productName}
                             onChange={ e => setProductName(e.target.value) }
                             placeholder="Transaction ID"/>
                     </div>
                     
                    
                     <div className="form-group">
                         <button
                             className="btn btn-primary float-right"
                             onClick={e => onSubmit({productName, description, price, duration})}>
                             Make the payment
                         </button>
                         
                         <div>
                             <br/>
                             <br/>
    <p className="big_p">
    <h3>Contract Rules: </h3>
    <li> Once agreed upon, ALL SALES ARE FINAL.<br/></li>
    
    <br/>
During the testing period:<br/>
<li>When offering an item for sale, the seller will document and describe in writing the condition of the product. <br/></li>
<li>If the buyer considers that the description of the product doesn’t match the condition of the product the buyer must return 
the product right away. </li>
<li>If the buyer agrees to test the product and wants to return it once the testing period is over, the 
condition of the product must match the documented description. If the product was damaged during the testing period, the 
money will go to the seller.</li>

<li>Duration of the testing period is agreed by the seller and buyer.</li>

    </p>
                  </div>
                       
                     </div>
                 </div>
             </div>
         </div>
     );
 }
 export default Confirmation;