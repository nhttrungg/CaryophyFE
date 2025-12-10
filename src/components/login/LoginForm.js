import { Formik, Form, Field } from "formik";
import SocialLogin from "./SocialLogin";
import {authApi} from "../../js/apiService";
import {login} from "../../utils/AuthUtils";
import { useNavigate } from "react-router-dom";
const LoginForm = ({loginLoad}) => {
    const navigate = useNavigate();

    const loginHandler = async (values) => {
        try {
            const response = await authApi.login(values.email, values.password);
            console.log('Login success:', response);
            if (response) {
                loginLoad(response?.users?.role);
                login(response)
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                remember: false,
            }}
            onSubmit={(values) => {
                loginHandler(values);
            }}
        >
            {() => (
                <Form className="l-f-o__form">
                    <SocialLogin />
                    <div className="u-s-m-b-30">
                        <label className="gl-label" htmlFor="login-email">E-MAIL *</label>
                        <Field
                            className="input-text input-text--primary-style"
                            type="text"
                            id="login-email"
                            name="email"
                            placeholder="Enter E-mail"
                        />
                    </div>
                    <div className="u-s-m-b-30">
                        <label className="gl-label" htmlFor="login-password">PASSWORD *</label>
                        <Field
                            className="input-text input-text--primary-style"
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="gl-inline">
                        <div className="u-s-m-b-30">
                            <button className="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button>
                        </div>
                        <div className="u-s-m-b-30">
                            <a className="gl-link" href="lost-password.html">Lost Your Password?</a>
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="check-box">
                            <Field type="checkbox" id="remember-me" name="remember" />
                            <div className="check-box__state check-box__state--primary">
                                <label className="check-box__label" htmlFor="remember-me">Remember Me</label>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
export default LoginForm;
