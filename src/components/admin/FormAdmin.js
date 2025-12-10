import React, {useState, useRef} from "react"
import {categoryApi} from "../../js/apiService";
import {uploadFile} from "../../js/firebase";

export function AddProductModal({ open, onClose, onSubmit, categories }) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        quantity: "",
        status: "active",
        image: null,
        imageUrl: "",
        description: "" ,
        longDescription: ""
    })
    const fileRef = useRef(null)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
    }
    async function handleImage(e) {
        const file = e.target.files[0]
        if (file) {
            const url = await uploadFile(file);
            setForm(f => ({...f, image: file, imageUrl:url }))
        }
    }
    function handleRemoveImg() {
        setForm(f => ({ ...f, image: null, imageUrl: "" }))
        fileRef.current.value = ""
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!form.name || !form.price || !form.quantity) return
        form.categoryId = categories.find(c=> c.name === form.category).categoryId
        form.category = null
        onSubmit(form)
        setForm({ name: "", price: "", category: "", quantity: "", status: "active", image: null, imageUrl: "", description: "" ,longDescription: ""})
        onClose()
    }

    if (!open) return null

    return (
        <div className="apm-modal-bg">
            <div className="apm-modal apm-modal-row">
                <div className="apm-modal-col-img">
                    <div className="apm-img-upload-area">
                        <label className="apm-img-upload-label" htmlFor="apm-file-input">
                            {form.imageUrl ? (
                                <img src={form.imageUrl} alt="preview" className="apm-img-preview-large" />
                            ) : (
                                <div className="apm-img-upload-placeholder">Upload Image</div>
                            )}
                        </label>
                        <input id="apm-file-input" type="file" accept="image/*" onChange={handleImage} ref={fileRef} style={{display:"none"}} />
                        {form.imageUrl && (
                            <button type="button" className="apm-img-remove" onClick={handleRemoveImg}>Remove Image</button>
                        )}
                    </div>
                </div>
                <div className="apm-modal-col-form">
                    <div className="apm-modal-header">
                        <span className="apm-modal-title">Add Product</span>
                        <button className="apm-close-btn" onClick={onClose}>×</button>
                    </div>
                    <form className="apm-form" onSubmit={handleSubmit}>
                        <div className="apm-form-columns">
                            <div className="apm-form-column">
                                <div className="apm-form-group">
                                    <label>Name</label>
                                    <input name="name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="apm-form-group">
                                    <label>Price</label>
                                    <input name="price" value={form.price} onChange={handleChange} required type="number" min="0" step="0.01" />
                                </div>
                                <div className="apm-form-group">
                                    <label>Category</label>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select category</option>
                                        {categories?.length > 0 && categories.map(cat => (
                                            <option key={cat.categoryId} value={cat.name}>{cat.description}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="apm-form-group">
                                    <label>Quantity</label>
                                    <input name="quantity" value={form.quantity} onChange={handleChange} required type="number" min="0" />
                                </div>
                            </div>

                            <div className="apm-form-column">
                                <div className="apm-form-group">
                                    <label>Status</label>
                                    <select name="status" value={form.status} onChange={handleChange}>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="apm-form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Enter product description"
                                    />
                                </div>
                                <div className="apm-form-group">
                                    <label>LongDescription</label>
                                    <textarea
                                        name="longDescription"
                                        value={form.longDescription}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Enter product long description"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="apm-submit-container">
                            <button className="apm-submit" type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}