import React from "react";

const infoList = [
  {
    icon: "fas fa-phone-volume",
    title: "LET'S HAVE A CALL",
    lines: ["(+0) 900 901 904", "(+0) 900 901 902"],
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "OUR LOCATION",
    lines: ["4247 Ashford Drive VA-20006", "Virginia US"],
  },
  {
    icon: "far fa-clock",
    title: "WORK TIME",
    lines: ["5 Days a Week", "From 9 AM to 7 PM"],
  },
];

const ContactInfo = () => (
  <div className="u-s-p-b-60">
    <div className="section__content">
      <div className="container">
        <div className="row">
          {infoList.map((info, idx) => (
            <div className="col-lg-4 col-md-6 u-s-m-b-30" key={idx}>
              <div className="contact-o u-h-100">
                <div className="contact-o__wrap">
                  <div className="contact-o__icon">
                    <i className={info.icon}></i>
                  </div>
                  <span className="contact-o__info-text-1">{info.title}</span>
                  {info.lines.map((line, i) => (
                    <span className="contact-o__info-text-2" key={i}>
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;