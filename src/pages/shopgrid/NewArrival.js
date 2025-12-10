import MegaFilter from "../../components/shopgrid/MegaFilter";
import ProductGrid from "../../components/shopgrid/ProductGrid";
import {useEffect, useState} from "react";
import {categoryApi, productApi} from "../../js/apiService";


const ShopGrid = () => {

    const [products,setProducts] = useState([]);
    const [size,setSize] = useState(8);
    const [page,setPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);

    const [filters, setFilters] = useState({
        name: '',
        categoryId: null,
        status: '',
        minPrice: null,
        maxPrice: null,
        createdFrom: null,
        createdTo: null,
        size: size,
        page: page
    });


    const [categories, setCategories] = useState([])

    const onSubmitSearch = async (filters) => {
        const res = await productApi.search(filters);
        setTotalItems(res.totalItems)
        setProducts(res.items)
    }

    useEffect(() => {
        const fetchCategory = async ()=>{
            const category =  await categoryApi.getAll()
            setCategories(category)
        }
        onSubmitSearch(filters)
        fetchCategory()
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const newFilters = {
            ...filters,
            page: page+1,
            size: size
        };
        onSubmitSearch(newFilters);
    }, [page, size]);

    return (
        <div className="u-s-p-y-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <MegaFilter
                        categories={categories}
                        onFilter={(filters)=>onSubmitSearch(filters)}
                        filters={filters}
                        setFilters={setFilters}
                        />
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <ProductGrid
                            products={products}
                            setSize={setSize}
                            setPage={setPage}
                            page={page}
                            size={size}
                            totalItem={totalItems}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopGrid;