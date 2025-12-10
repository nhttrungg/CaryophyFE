// src/components/Breadcrumb.js
const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__wrap">
                <ul className="breadcrumb__list">
                    <li className="has-separator">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="is-marked">
                        <a href="signin.html">Signin</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Breadcrumb;