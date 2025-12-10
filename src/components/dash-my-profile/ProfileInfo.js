import React from "react";

const ProfileInfo = () => (
  <div className="row">
    <div className="col-lg-4 u-s-m-b-30">
      <h2 className="dash__h2 u-s-m-b-8">Full Name</h2>
      <span className="dash__text">John Doe</span>
    </div>
    <div className="col-lg-4 u-s-m-b-30">
      <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
      <span className="dash__text">johndoe@domain.com</span>
      <div className="dash__link dash__link--secondary">
        <a href="#">Change</a>
      </div>
    </div>
    <div className="col-lg-4 u-s-m-b-30">
      <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
      <span className="dash__text">Please enter your mobile</span>
      <div className="dash__link dash__link--secondary">
        <a href="#">Add</a>
      </div>
    </div>
    <div className="col-lg-4 u-s-m-b-30">
      <h2 className="dash__h2 u-s-m-b-8">Birthday</h2>
      <span className="dash__text">1991-02-02</span>
    </div>
    <div className="col-lg-4 u-s-m-b-30">
      <h2 className="dash__h2 u-s-m-b-8">Gender</h2>
      <span className="dash__text">Male</span>
    </div>
  </div>
);

export default ProfileInfo;