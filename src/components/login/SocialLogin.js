// src/components/auth/SocialLogin.js
const SocialLogin = () => {
    return (
        <div className="gl-s-api">
            <div className="u-s-m-b-15">
                <button className="gl-s-api__btn gl-s-api__btn--fb" type="button">
                    <i className="fab fa-facebook-f"></i>
                    <span>Signin with Facebook</span>
                </button>
            </div>
            <div className="u-s-m-b-15">
                <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button">
                    <i className="fab fa-google"></i>
                    <span>Signin with Google</span>
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;