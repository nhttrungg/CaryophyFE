// src/components/Breadcrumb.js
const Breadcrumb = ({ items }) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__wrap">
                <ul className="breadcrumb__list">
                    {items.map((item, index) => (
                        <li key={index} className={index < items.length - 1 ? "has-separator" : "is-marked"}>
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Breadcrumb;