import React from "react"

function MegaMenuSection({ title, items }) {
    return (
        <div className="col-lg-3">
            <ul>
                <li className="mega-list-title">
                    <a href="#">{title}</a>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function MegaMenuImage({ src }) {
    return (
        <div className="col-lg-3 mega-image">
            <div className="mega-banner">
                <a className="u-d-block" href="#">
                    <img className="u-img-fluid u-d-block" src={src} alt="banner" />
                </a>
            </div>
        </div>
    )
}

export function MegaMenu() {
    const categories = [
        {
            title: "3D PRINTER & SUPPLIES",
            items: ["3d Printer", "3d Printing Pen", "3d Printing Accessories", "3d Printer Module Board"],
        },
        {
            title: "HOME AUDIO & VIDEO",
            items: ["TV Boxes", "TC Receiver & Accessories", "Display Dongle", "Home Theater System"],
        },
        {
            title: "MEDIA PLAYERS",
            items: ["Earphones", "Mp3 Players", "Speakers & Radios", "Microphones"],
        },
        {
            title: "VIDEO GAME ACCESSORIES",
            items: ["Nintendo", "Sony", "Xbox Accessories"],
        },
    ]

    return (
        <div className="mega-menu-content js-active">
            <div className="row">
                {categories.map((section, idx) => (
                    <MegaMenuSection key={idx} title={section.title} items={section.items} />
                ))}
            </div>

            <div className="row">
                <MegaMenuImage src="images/banners/banner-mega-0.jpg" />
                <MegaMenuImage src="images/banners/banner-mega-1.jpg" />
                <MegaMenuImage src="images/banners/banner-mega-2.jpg" />
                <MegaMenuImage src="images/banners/banner-mega-3.jpg" />
            </div>
        </div>
    )
}
