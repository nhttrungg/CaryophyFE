import Breadcrumb from "../../components/signup/Breadcumb";
import SignupForm from "../../components/signup/SignupForm";


const SignupPage = () => {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Signup', link: '/signup' }
    ];

    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="container">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>
            </div>

            <div className="u-s-p-b-60">
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                                        <SignupForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;