import React,{ useState , useEffect} from "react";
import { Search, Edit2, Trash2 } from "lucide-react";
import "../../css/manageview.css"
import {categoryApi} from "../../js/apiService";
import AddCategoryModal from "./AddCategoryForm";
import EditCategoryModal from "./EditCategoryForm";
import {toast} from "react-toastify";

export function CategoryManager() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    const filtered = categories.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
    );

    const fetchCategories = async () => {
        const categories = await categoryApi.getAll()
        setCategories(categories);
    }
    useEffect(() => {
        fetchCategories();
    }, []);

    const [showAddModal, setShowAddModal] = useState(false);
    const handleAddCategory = (categories) => {
        categoryApi.create(categories).then(r =>{
            setCategories(old => [...old, r])
            setShowAddModal(false)
        })
    }

    const [showEditModal, setShowEditModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);

    const handleEditClick = (categories) => {
        setEditingCategory(categories)
        setShowEditModal(true);
    }

    const handleUpdateCategory = (data) => {
        console.log("Updating category:", editingCategory, data);
        categoryApi.update(editingCategory.categoryId, data).then(r => {
            setCategories(old => old.map(c => c.categoryId === editingCategory.categoryId ? { ...c, ...data } : c));
            setShowEditModal(false);
            setEditingCategory(null);
        });
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            await categoryApi.delete(categoryId);
            setCategories(prev => prev.filter(c => c.categoryId !== categoryId));
            toast.success("Đã xóa danh mục.");
        }catch (error){
            console.error("Error deleting category:", error);
            toast.error("Không thể xóa danh mục.");
        }
    }

    return (
        <div className="pm-section">
            <div className="pm-header-row">
                <div>
                    <h1 className="pm-title">Category Management</h1>
                    <div className="pm-desc">Manage your product categories</div>
                </div>
                <button className="pm-btn pm-btn-black" onClick={() => setShowAddModal(true)}>
                    <span style={{ fontSize: 20, marginRight: 8 }}>+</span> Add Category
                </button>
            </div>

            <div className="pm-card">
                <div className="pm-card-title">Search Categories</div>
                <div className="pm-search-row">
                    <Search className="pm-search-icon" />
                    <input
                        className="pm-search-input"
                        placeholder="Search by name or description..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="pm-card">
                <div className="pm-card-title">Categories ({filtered.length})</div>
                <table className="pm-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>CreatedAt</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map(c => (
                        <tr key={c.categoryId}>
                            <td>{c.name}</td>
                            <td>{c.description}</td>
                            <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button className="pm-action-btn" onClick={() => handleEditClick(c)}>
                                    <Edit2 size={16} />
                                </button>
                                <button className="pm-action-btn pm-action-delete" onClick={() => handleDeleteCategory(c.categoryId)}>
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <AddCategoryModal
            open={showAddModal}
            onClose={() => setShowAddModal(false)}
            onSubmit={handleAddCategory}
            />
            <EditCategoryModal
            open={showEditModal}
            onClose={() => setShowEditModal(false)}
            category={editingCategory}
            onSubmit={handleUpdateCategory}
            />
        </div>
    );
}
