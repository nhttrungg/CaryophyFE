import React from "react";

const ProfileActions = () => (
  <div className="row">
    <div className="col-lg-12">
      <div className="dash__link dash__link--secondary u-s-m-b-30">
        <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a>
      </div>
      <div className="u-s-m-b-16">
        <a className="dash__custom-link btn--e-transparent-brand-b-2" href="edit-profile">Edit Profile</a>
      </div>
      <div>
        <a className="dash__custom-link btn--e-brand-b-2" href="#">Change Password</a>
      </div>
    </div>
  </div>
);

export default ProfileActions;