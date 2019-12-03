

 import React, {useState} from "react";
 function BuyerForm({onSubmit}) {
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [duration, setDuration] = useState("");
     return (
         <div className="card">
             <div className="card-body">
                 <h4 className="card-title">Details</h4>
                 <div>
                     <div className="form-group">
                         <input
                             type="text"
                             className="form-control"
                             value={productName}
                             onChange={ e => setProductName(e.target.value) }
                             placeholder="Product Name"/>
                     </div>
                     <div className="form-group">
                         <input
                             type="text"
                             value={description}
                             onChange={ e => setDescription(e.target.value) }
                             className="form-control"
                             placeholder="Product Id"/>
                     </div>
            
                     <div className="form-group">
                         <button
                             className="btn btn-primary"
                             onClick={e => onSubmit({productName, description, price, duration})}>
                             Approve
                         </button>
                         

                         <button
                             className="btn btn-primary  float-right"
                             onClick={e => onSubmit({productName, description, price, duration})}>
                             Reject
                         </button>
                     </div>
                 </div>
             </div>
         </div>
     );
 }
 export default BuyerForm;