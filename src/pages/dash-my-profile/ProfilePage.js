import React from "react";
import ProfileBreadcrumb from "../../components/dash-my-profile/ProfileBreadcrumb";
import DashboardSidebar from "../../components/dash-my-profile/DashboardSidebar";
import ProfileInfo from "../../components/dash-my-profile/ProfileInfo";
import ProfileActions from "../../components/dash-my-profile/ProfileActions";

const ProfilePage = () => (
  <div className="app-content">
    <ProfileBreadcrumb />
    <div className="u-s-p-b-60">
      <div className="section__content">
        <div className="dash">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <DashboardSidebar />
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                  <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">My Profile</h1>
                    <span className="dash__text u-s-m-b-30">
                      Look all your info, you could customize your profile.
                    </span>
                    <ProfileInfo />
                    <ProfileActions />
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

export default ProfilePage;