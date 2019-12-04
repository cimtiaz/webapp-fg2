

 import React, {useState} from "react";
 import {Link} from 'react-router-dom'; 
 //import Confirmation from './components/confirmation/Confirmation';

 function BuyerForm({onSubmit}) {
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [duration, setDuration] = useState("");
     return (
         <div className="card">
             <div className="card-body">
                 <h4 className="card-title">Product</h4>
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
                       
                     <Link to="/confirmation">
                     <button className="btn btn-primary">
                        Approve
                        </button>
                         </Link>
                         
                         

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