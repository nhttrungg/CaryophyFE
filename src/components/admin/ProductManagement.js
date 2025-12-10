import React, {useEffect, useState} from "react"
import { Edit2, Trash2, Search } from "lucide-react"
import "../../css/manageview.css"
import { AddProductModal } from "./FormAdmin"
import {EditProductModal} from "./EditProductForm";
import {categoryApi, productApi} from "../../js/apiService";
import {toast} from "react-toastify";

export function ProductManager() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [search, setSearch] = useState("")

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    )

    const fetchCategory = async ()=>{
        const category =  await categoryApi.getAll()
        setCategories(category)
    }

    const fetchProducts = async ()=>{
        const product =  await productApi.getAll()
        setProducts(product)
    }

    useEffect(() => {
        fetchCategory()
        fetchProducts()
    }, [])

    const [showModal, setShowModal] = useState(false)
    const handleAddProduct = (product) => {
        productApi.create(product).then(r => {
            setProducts(old => [...old, { ...product}])
            setShowModal(false)
        })
    }

    const [showEditModal, setShowEditModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)

    const handleEditClick = (product) => {
        console.log("Product to edit:", product);
        setEditingProduct(product)
        setShowEditModal(true)
    }

    const handleUpdateProduct = (data) => {
        productApi.update(editingProduct.productId, data).then(r => {
            setProducts(old => old.map(p => p.productId === editingProduct.productId ? { ...p, ...data } : p))
            setShowEditModal(false)
            setEditingProduct(null)
        })
    }
    const handleDeleteProduct = async (productId) =>{
        try {
            await productApi.delete(productId);
            setProducts(prev => prev.filter(p => p.productId !== productId));
            toast.success("Đã xóa sản phẩm thành công.");
        }catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Không thể xóa sản phẩm.");
        }
    }


    return (
        <div className="pm-section">
            <div className="pm-header-row">
                <div>
                    <h1 className="pm-title">Product Management</h1>
                    <div className="pm-desc">Manage your product inventory</div>
                </div>
                <button className="pm-btn pm-btn-black" onClick={() => setShowModal(true)}>
                    <span style={{fontSize:20, marginRight:8}}>+</span> Add Product
                </button>
            </div>
            <div className="pm-card">
                <div className="pm-card-title">Search Products</div>
                <div className="pm-search-row">
                    <Search className="pm-search-icon" />
                    <input className="pm-search-input" placeholder="Search products by name or category..." value={search} onChange={e=>setSearch(e.target.value)} />
                </div>
            </div>
            <div className="pm-card">
                <div className="pm-card-title">Products ({filtered.length})</div>
                <table className="pm-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filtered.map((p, idx) => (
                        <tr key={p.id}>
                            <td>
                                {p.imageUrl && (
                                    <img src={p.imageUrl} alt={p.name} style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 4 }} />
                                )}
                            </td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>${p.price}</td>
                            <td>{p.stock}</td>
                            <td>{p.quantity}</td>
                            <td><span className="pm-badge pm-badge-green">{p.status}</span></td>
                            <td>
                                <button className="pm-action-btn" onClick={() => handleEditClick(p)}><Edit2 size={16} /></button>
                                <button className="pm-action-btn pm-action-delete" onClick={() =>handleDeleteProduct(p.productId)}><Trash2 size={16} /></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <AddProductModal
                open={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAddProduct}
                categories={categories}
            />
            <EditProductModal
                open={showEditModal}
                onClose={() => setShowEditModal(false)}
                product={editingProduct}
                onSubmit={handleUpdateProduct}
                categories={categories}
            />
        </div>
    )
}