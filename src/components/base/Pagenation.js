import React from 'react';

const Pagination = ({ page, size, total, onPageChange }) => {
    const totalPages = Math.ceil(total / size);
    if (totalPages <= 0) return null;

    // page (0-based) nên hiển thị là page+1, còn tính toán vẫn dùng 0-based
    let start = Math.max(0, page - 1);
    let end = start + 3;
    if (end > totalPages - 1) {
        end = totalPages - 1;
        start = Math.max(0, end - 3);
    }
    const pageNumbers = [];
    for (let i = start; i <= Math.min(end, totalPages - 1); i++) {
        pageNumbers.push(i);
    }

    while (pageNumbers.length < 4 && pageNumbers[0] > 0) {
        pageNumbers.unshift(pageNumbers[0] - 1);
    }
    while (pageNumbers.length < 4 && pageNumbers[pageNumbers.length - 1] < totalPages - 1) {
        pageNumbers.push(pageNumbers[pageNumbers.length - 1] + 1);
    }

    return (
        <div className="u-s-p-y-60">
            <ul className="shop-p__pagination">
                {/* Về trang 1 */}
                <li>
                    <a
                        href="#"
                        onClick={e => { e.preventDefault(); onPageChange(0); }}
                        aria-label="First"
                    >
                        «
                    </a>
                </li>
                {/* Nút Previous */}
                <li>
                    <a
                        href="#"
                        onClick={e => { e.preventDefault(); onPageChange(Math.max(0, page - 1)); }}
                        aria-label="Prev"
                    >
                        &lt;
                    </a>
                </li>
                {pageNumbers.map((p) => (
                    <li key={p} className={p === page ? 'is-active' : ''}>
                        <a
                            href="#"
                            onClick={e => { e.preventDefault(); if (p !== page) onPageChange(p); }}
                        >
                            {p + 1}
                        </a>
                    </li>
                ))}
                {/* Nút Next */}
                <li>
                    <a
                        href="#"
                        onClick={e => { e.preventDefault(); onPageChange(Math.min(totalPages - 1, page + 1)); }}
                        aria-label="Next"
                    >
                        &gt;
                    </a>
                </li>
                {/* Về trang cuối */}
                <li>
                    <a
                        href="#"
                        onClick={e => { e.preventDefault(); onPageChange(totalPages - 1); }}
                        aria-label="Last"
                    >
                        »
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
