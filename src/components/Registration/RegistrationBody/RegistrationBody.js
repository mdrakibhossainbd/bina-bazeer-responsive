import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationBody.css';

const RegistrationBody = () => {

const registerClick = (e)=>{

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNo = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');


    const regInfo = {firstName,lastName,phoneNo,password};

    fetch('http://api.binabazaar.com/api/user/registration',{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(regInfo)
    })
    .then( res=> res.json())
    .then( result => {
        if(result){
          alert('Regsration seccessfully')
        }
      })

    


    e.preventDefault();
}




    return (
        <div className="reg">
            <div className="container">
                <h4>ACCOUNT REGISTRATION</h4>
                <div className="reg-content">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h5 className="text-center">RETURNING CUSTOMER</h5>
                            <div className="underLine"></div>
                        </div>
                    </div>
                    <div className="reg-input">
                        <div className="row">
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input id="firstName" type="text" placeholder="First Name*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input id="lastName" type="text" placeholder="Last Name*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input id="phoneNumber" type="number" placeholder="Phone Number*" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input id="password" type="password" placeholder="Password*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input id="confirmPassword" type="password" placeholder="Confirm Password*" className="form-control" />
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                        <input type="checkbox" name="registration" />
                        <label for="registration"> Iam agree with the <a href="#">Privacy Policy</a> </label>
                        {/* <a className="already" href="#">Already have an account? Login</a> */}
                        <Link
                         className="already" to="/login">  Already have an account? Login</Link>
                    </div>
                    <button className="reg-btn" onClick={registerClick}>REGISTRATION</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationBody;