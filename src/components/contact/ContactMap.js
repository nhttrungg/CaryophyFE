import React, { useEffect } from "react";

const ContactMap = () => {
  useEffect(() => {
    // Nếu bạn dùng Google Maps JS API, hãy khởi tạo map ở đây
    // window.initMap() hoặc code tương tự nếu cần
  }, []);

  return (
    <div className="u-s-p-b-60">
      <div className="section__content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="g-map">
                <div id="map" style={{ width: "100%", height: "350px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;