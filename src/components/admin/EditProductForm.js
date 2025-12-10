import React, { useState, useRef, useEffect } from "react"
import {categoryApi} from "../../js/apiService";

export function EditProductModal({ open, onClose, product, onSubmit ,categories}) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
        stock: "",
        status: "active",
        image: null,
        imageUrl: "",
        description: "",
        longDescription: ""
    })
    const fileRef = useRef(null)


    useEffect(() => {
        if (product && open) {
            setForm({
                name: product.name || "",
                price: product.price || "",
                category: product.category || "",
                stock: product.stock || "",
                status: product.status || "active",
                image: null,
                imageUrl: product.imageUrl || "",
                description: product.description || "",
                longDescription: product.longDescription || ""
            })
        }
    }, [product, open])

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
    }
    function handleImage(e) {
        const file = e.target.files[0]
        if (file) {
            setForm(f => ({ ...f, image: file, imageUrl: URL.createObjectURL(file) }))
        }
    }
    function handleRemoveImg() {
        setForm(f => ({ ...f, image: null, imageUrl: "" }))
        fileRef.current.value = ""
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!form.name || !form.price || !form.category || !form.stock) return
        // Trả về cả ảnh mới (nếu có) và ảnh cũ (nếu không đổi)
        onSubmit(form)
        onClose()
    }
    if (!open) return null
    return (
        <div className="apm-modal-bg">
            <div className="apm-modal apm-modal-row">
                {/* Cột ảnh bên trái */}
                <div className="apm-modal-col-img">
                    <div className="apm-img-upload-area">
                        <label className="apm-img-upload-label" htmlFor="epm-file-input">
                            {form.imageUrl ? (
                                <img src={form.imageUrl} alt="preview" className="apm-img-preview-large" />
                            ) : (
                                <div className="apm-img-upload-placeholder">Upload Image</div>
                            )}
                        </label>
                        <input id="epm-file-input" type="file" accept="image/*" onChange={handleImage} ref={fileRef} style={{display:"none"}} />
                        {form.imageUrl && (
                            <button type="button" className="apm-img-remove" onClick={handleRemoveImg}>Remove Image</button>
                        )}
                    </div>
                </div>
                {/* Cột form bên phải */}
                <div className="apm-modal-col-form">
                    <div className="apm-modal-header">
                        <span className="apm-modal-title">Edit Product</span>
                        <button className="apm-close-btn" onClick={onClose}>×</button>
                    </div>
                    <form className="apm-form" onSubmit={handleSubmit}>
                        <div className="apm-form-group">
                            <label>Name</label>
                            <input name="name" value={form.name} onChange={handleChange} required/>
                        </div>
                        <div className="apm-form-group">
                            <label>Price</label>
                            <input name="price" value={form.price} onChange={handleChange} required type="number"
                                   min="0" step="0.01"/>
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
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="apm-form-group">
                            <label>Stock</label>
                            <input name="stock" value={form.stock} onChange={handleChange} required type="number"
                                   min="0"/>
                        </div>
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
                                placeholder="Enter category description"
                            />
                        </div>
                        <div className="apm-form-group">
                            <label>Long Description</label>
                            <textarea
                                name="longDescription"
                                value={form.longDescription}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Enter category long description"
                            />
                        </div>
                        <button className="apm-submit" type="submit">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
