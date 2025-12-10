import React, {useEffect, useState} from 'react';
import SectionTitle from './SectionTitle';
import DealItem from './DealItem';
import {productApi} from "../../../js/apiService";

const DealsSection = () => {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const res = await productApi.getAll();
                const all = res.data || res;
                const sortedByDate = all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                const newestDeals = sortedByDate.slice(0, 4);
                setDeals(newestDeals);
            } catch (err) {
                console.error("Failed to fetch deals:", err);
            }
        };
        fetchDeals();
    }, []);

    return (
        <div className="u-s-p-y-60">
            <SectionTitle
                heading="SHOP BY DEALS"
                spans={["BROWSE FAVOURITE DEALS"]}
            />

            <div className="section__content">
                <div className="container">
                    <div className="row">
                        {deals.map(deal => (
                            <DealItem
                                key={deal.productId}
                                productId={deal.productId}
                                imageSrc={deal.imageUrl}
                                isSquare={true}
                                colSize={deal.colSize || 3}
                                name={deal.name}
                                price={deal.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsSection;
