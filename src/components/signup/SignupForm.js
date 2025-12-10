// src/components/auth/SignupForm.js
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SocialSignup from "./SocialSignup";
import {authApi} from "../../js/apiService";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

const SignupForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        month: '',
        day: '',
        year: '',
        gender: ''
    };

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            debugger
            if(!(values.password === values.confirmPassword)) {
                return
            }
            const  response = await authApi.register(values.email, values.password);

        } catch (error) {
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isSubmitting,values }) => (
                <Form className="l-f-o__form">
                    <SocialSignup/>

                    <div className="u-s-m-b-30">
                        <label className="gl-label" htmlFor="email">E-MAIL *</label>
                        <Field
                            className="input-text input-text--primary-style"
                            type="email"
                            name="email"
                            placeholder="Enter E-mail"
                        />
                        {errors.email && touched.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="u-s-m-b-30">
                        <label className="gl-label" htmlFor="password">PASSWORD *</label>
                        <Field
                            className="input-text input-text--primary-style"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        {errors.password && touched.password && <div className="error">{errors.password}</div>}
                    </div>

                    <div className="u-s-m-b-30">
                        <label className="gl-label" htmlFor="confirmPassword">CONFIRM PASSWORD *</label>
                        <Field
                            className="input-text input-text--primary-style"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && touched.confirmPassword &&
                            <div className="error">{errors.confirmPassword}</div>}
                    </div>

                    <div className="u-s-m-b-15">
                        <button
                            className="btn btn--e-transparent-brand-b-2"
                            type="submit"
                            onClick={()=>handleSubmit(values)}
                        >
                            CREATE
                        </button>
                    </div>

                    <a className="gl-link" href="#">Return to Store</a>
                </Form>
            )}
        </Formik>
    );
}

export default SignupForm;