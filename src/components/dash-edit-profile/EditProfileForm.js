import React from 'react';

const EditProfileForm = () => (
    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
        <div className="dash__pad-2">
            <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>
            <span className="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
            <div className="dash__link dash__link--secondary u-s-m-b-30">
                <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="dash-edit-p">
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="John" />
                            </div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <span className="gl-label">BIRTHDAY</span>
                                <div className="gl-dob">
                                    <select className="select-box select-box--primary-style">
                                        <option defaultValue>Month</option>
                                        <option value="male">January</option>
                                        <option value="male">February</option>
                                        <option value="male">March</option>
                                        <option value="male">April</option>
                                    </select>
                                    <select className="select-box select-box--primary-style">
                                        <option defaultValue>Day</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                    </select>
                                    <select className="select-box select-box--primary-style">
                                        <option defaultValue>Year</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                    </select>
                                </div>
                            </div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="gender">GENDER</label>
                                <select className="select-box select-box--primary-style u-w-100" id="gender">
                                    <option defaultValue>Select</option>
                                    <option value="male">Male</option>
                                    <option value="male">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                                <span className="dash__text">johndoe@domain.com</span>
                                <div className="dash__link dash__link--secondary">
                                    <a href="#">Change</a>
                                </div>
                            </div>
                            <div className="u-s-m-b-30">
                                <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                                <span className="dash__text">Please enter your mobile</span>
                                <div className="dash__link dash__link--secondary">
                                    <a href="#">Add</a>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default EditProfileForm;