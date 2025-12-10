// src/components/auth/LoginPage.js
import Breadcrumb from '../../components/login/Breadcrumb';
import LoginForm from '../../components/login/LoginForm';
import {authApi} from "../../js/apiService";
import {login} from "../../utils/AuthUtils";
import {useState} from "react";

const LoginPage = ({loginLoad}) => {

    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="container">
                        <Breadcrumb />
                    </div>
                </div>
            </div>

            <div className="u-s-p-b-60">
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">ALREADY REGISTERED?</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">I'M NEW CUSTOMER</h1>
                                        <span className="gl-text u-s-m-b-30">
                                            By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.
                                        </span>
                                        <div className="u-s-m-b-15">
                                            <a className="l-f-o__create-link btn--e-transparent-brand-b-2" href="signup.html">
                                                CREATE AN ACCOUNT
                                            </a>
                                        </div>
                                        <h1 className="gl-h1">SIGNIN</h1>
                                        <span className="gl-text u-s-m-b-30">
                                            If you have an account with us, please log in.
                                        </span>
                                        <LoginForm loginLoad={loginLoad}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;