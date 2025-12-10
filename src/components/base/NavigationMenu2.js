// src/components/base/NavigationMenu2.js
const NavigationMenu2 = () => {
    return (
        <div className="menu-init" id="navigation2">
            <button className="btn btn--icon toggle-button fas fa-cog" type="button"></button>
            <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/shop">SHOP</a>
                    </li>
                    <li className="has-dropdown">
                        <a href={'/contact'}>CONTACT<i className="fas u-s-m-l-6"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationMenu2;