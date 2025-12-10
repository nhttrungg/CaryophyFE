import React from "react";

const CheckoutMessageGroup = () => (
  <div className="u-s-p-b-60">
    <div className="section__content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="checkout-msg-group">
              <div className="msg u-s-m-b-30">
                <span className="msg__text">
                  Returning customer?
                  <a className="gl-link" href="#return-customer" data-toggle="collapse">Click here to login</a>
                </span>
                <div className="collapse" id="return-customer" data-parent="#checkout-msg-group">
                  <div className="l-f u-s-m-b-16">
                    <span className="gl-text u-s-m-b-16">If you have an account with us, please log in.</span>
                    <form className="l-f__form">
                      <div className="gl-inline">
                        <div className="u-s-m-b-15">
                          <label className="gl-label" htmlFor="login-email">E-MAIL *</label>
                          <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter E-mail" />
                        </div>
                        <div className="u-s-m-b-15">
                          <label className="gl-label" htmlFor="login-password">PASSWORD *</label>
                          <input className="input-text input-text--primary-style" type="text" id="login-password" placeholder="Enter Password" />
                        </div>
                      </div>
                      <div className="gl-inline">
                        <div className="u-s-m-b-15">
                          <button className="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button>
                        </div>
                        <div className="u-s-m-b-15">
                          <a className="gl-link" href="lost-password.html">Lost Your Password?</a>
                        </div>
                      </div>
                      <div className="check-box">
                        <input type="checkbox" id="remember-me" />
                        <div className="check-box__state check-box__state--primary">
                          <label className="check-box__label" htmlFor="remember-me">Remember Me</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="msg">
                <span className="msg__text">
                  Have a coupon?
                  <a className="gl-link" href="#have-coupon" data-toggle="collapse">Click Here to enter your code</a>
                </span>
                <div className="collapse" id="have-coupon" data-parent="#checkout-msg-group">
                  <div className="c-f u-s-m-b-16">
                    <span className="gl-text u-s-m-b-16">Enter your coupon code if you have one.</span>
                    <form className="c-f__form">
                      <div className="u-s-m-b-16">
                        <div className="u-s-m-b-15">
                          <input className="input-text input-text--primary-style" type="text" id="coupon" placeholder="Coupon Code" />
                        </div>
                        <div className="u-s-m-b-15">
                          <button className="btn btn--e-transparent-brand-b-2" type="submit">APPLY</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutMessageGroup;