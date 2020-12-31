import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LoginBody.css';

const LoginBody = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const login = (e)=>{

        const phoneNo = document.getElementById('phoneEmail').value;
        const password = document.getElementById('password').value;
        const loginInfo = {phoneNo,password};

        fetch('http://api.binabazaar.com/api/user/login',{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then( res => res.json())
        .then( data =>{
            if(data){
                localStorage.setItem('userToken', data.token);
                history.replace(from);
                
            }
            
        });


        e.preventDefault();
    }



   




    return (
        <div className="login-body">
            <div className="container">
                <h4>ACCOUNT LOGIN</h4>
                <div className="login-area">
                    <div className="row">
                        <div className="col-md-6 login-left">
                            <h5>NEW CUSTOMER</h5>
                            <div className="underLine"></div>
                            <p>By creating an account you will be able to shop faster, be up to date on an
                                order's status, and keep track of the orders you have previously made.</p>
                            <Link to="/registration">
                                <button className="reg-btn ">Registration Now</button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <h5>RETURNING CUSTOMER</h5>
                            <div className="underLine"></div>
                            <div className="login-input">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input id="phoneEmail" type="text" placeholder="Email or Mobile Number" className="form-control" />
                                <br />
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input id="password" type="password" placeholder="Password" className="form-control " />
                                <a href="#">Forget Password ?</a>
                                <button onClick={login} className="btn-login">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBody;