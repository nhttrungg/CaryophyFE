import React, {useEffect, useState} from 'react';
import '../../css/filter.css'
const FilterSection = ({ title, children, defaultExpanded = true }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="u-s-m-b-30">
            <div className="shop-w">
                <div className="shop-w__intro-wrap">
                    <h1 className="shop-w__h">{title}</h1>
                    <span
                        className={`fas ${isExpanded ? 'fa-minus' : 'fa-plus'} shop-w__toggle`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    ></span>
                </div>
                {isExpanded && (
                    <div className="shop-w__wrap">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

const CategoryItem = ({ category, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <li className={category.subCategories ? "has-list" : ""}>
            <a href={category.link}>{category.name}</a>
            {category.count && <span className="category-list__text u-s-m-l-6">({category.count})</span>}
            {category.subCategories && (
                <span
                    className={`js-shop-category-span ${isExpanded ? 'fas fa-minus' : 'fas fa-plus'} u-s-m-l-6`}
                    onClick={() => setIsExpanded(!isExpanded)}
                ></span>
            )}
            {isExpanded && category.subCategories && (
                <ul style={{ display: 'block', paddingLeft: `${level * 20}px` }}>
                    {category.subCategories.map((subCategory, index) => (
                        <CategoryItem key={index} category={subCategory} level={level + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const ShopSidebar = ({ categories, onFilter, filters,setFilters }) => {


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter && onFilter(filters);
    };

    return (
        <div className="shop-w-master">
            <h1 className="shop-w-master__heading u-s-m-b-30">
                <i className="fas fa-filter u-s-m-r-8"></i>
                <span>FILTERS</span>
            </h1>
            <div className="shop-w-master__sidebar sidebar--bg-snow">
                <form onSubmit={handleSubmit}>
                    <FilterSection title="NAME">
                        <input
                            className="input-text input-text--primary-style"
                            type="text"
                            name="name"
                            placeholder="Product name"
                            value={filters.name}
                            onChange={handleChange}
                        />
                    </FilterSection>

                    <FilterSection title="CATEGORY">
                        <select
                            className="input-text input-text--primary-style"
                            name="categoryId"
                            value={filters.categoryId}
                            onChange={handleChange}
                        >
                            <option value="">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat.categoryId} value={cat.categoryId}>{cat.name}</option>
                            ))}
                        </select>
                    </FilterSection>

                    <FilterSection title="STATUS">
                        <select
                            className="input-text input-text--primary-style"
                            name="status"
                            value={filters.status}
                            onChange={handleChange}
                        >
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </FilterSection>

                    <FilterSection title="PRICE">
                        <div className="double-input-row">
                            <input
                                className="input-text input-text--primary-style"
                                type="number"
                                name="minPrice"
                                placeholder="Min"
                                value={filters.minPrice}
                                onChange={handleChange}
                            />
                            <span style={{margin: '0 8px', color: '#bbb'}}>-</span>
                            <input
                                className="input-text input-text--primary-style"
                                type="number"
                                name="maxPrice"
                                placeholder="Max"
                                value={filters.maxPrice}
                                onChange={handleChange}
                            />
                        </div>
                    </FilterSection>

                    <FilterSection title="CREATED DATE">
                        <div className="double-input-row">
                            <input
                                className="input-text input-text--primary-style"
                                type="date"
                                name="createdFrom"
                                value={filters.createdFrom}
                                onChange={handleChange}
                            />
                            <span style={{margin: '0 8px', color: '#bbb'}}>-</span>
                            <input
                                className="input-text input-text--primary-style"
                                type="date"
                                name="createdTo"
                                value={filters.createdTo}
                                onChange={handleChange}
                            />
                        </div>
                    </FilterSection>

                    <button className="btn btn--primary" type="submit" style={{ width: '100%' }}>
                        Apply Filters
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ShopSidebar;