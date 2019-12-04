import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Sign up</h4>
                <div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <input
                            type="address"
                            value={address}
                            onChange={ e => setAddress(e.target.value) }
                            className="form-control"
                            placeholder="Address"/>
                    </div>

                    <div className="form-group">
                        <input
                            type="phone"
                            value={phone}
                            onChange={ e => setPhone(e.target.value) }
                            className="form-control"
                            placeholder="Phone Number"/>
                    </div>



                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-primary"
                            onClick={e => onSubmit({name, email, password,address,phone})}>
                            Create account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterForm;