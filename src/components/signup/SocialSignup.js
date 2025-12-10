// src/components/auth/SocialSignup.js
const SocialSignup = () => {
    return (
        <div className="gl-s-api">
            <div className="u-s-m-b-15">
                <button className="gl-s-api__btn gl-s-api__btn--fb" type="button">
                    <i className="fab fa-facebook-f"></i>
                    <span>Signup with Facebook</span>
                </button>
            </div>
            <div className="u-s-m-b-30">
                <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button">
                    <i className="fab fa-google"></i>
                    <span>Signup with Google</span>
                </button>
            </div>
        </div>
    );
}
export default SocialSignup;