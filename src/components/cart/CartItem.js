import React from "react";

const CartItemRow = ({ cartItem, onQuantityChange, onRemove }) => {
    console.log(cartItem)
    return (
        <tr>
            <td>
                <div className="table-p__box">
                    <div className="table-p__img-wrap">
                        <img className="u-img-fluid" src={cartItem.imageUrl} alt={cartItem.name} />
                    </div>
                    <div className="table-p__info">
            <span className="table-p__name">
              <a href={`/product-detail/${cartItem.productId}`}>{cartItem.name}</a>
            </span>
                        <span className="table-p__category">
              <a href={`/category/${cartItem.categoryId}`}>{cartItem.category?.name || "Category"}</a>
            </span>
                        {cartItem.variantList && (
                            <ul className="table-p__variant-list">
                                {cartItem.variantList.map((variant, idx) => (
                                    <li key={idx}><span>{variant}</span></li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </td>
            <td>
                <span className="table-p__price">${cartItem.quantity*cartItem.price}</span>
            </td>
            <td>
                <div className="table-p__input-counter-wrap">
                    <div className="input-counter">
                        <span
                            className="input-counter__minus fas fa-minus"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                onQuantityChange(cartItem.productId, -1)
                            }}
                        />
                        <input
                            className="input-counter__text input-counter--text-primary-style"
                            type="text"
                            value={cartItem.quantity}
                            data-min="1"
                            data-max={cartItem.stock}
                            readOnly
                        />
                        <span
                            className="input-counter__plus fas fa-plus"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                onQuantityChange(cartItem.productId, 1)
                            }}
                        />
                    </div>
                </div>
            </td>
            <td>
                <div className="table-p__del-wrap">
                    <a
                        className="far fa-trash-alt table-p__delete-link"
                        href="#"
                        onClick={(e) => { e.preventDefault(); onRemove(cartItem.productId); }}
                    />
                </div>
            </td>
        </tr>
    );
};

export default CartItemRow;
