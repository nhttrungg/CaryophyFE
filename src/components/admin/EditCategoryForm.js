import React, { useState, useEffect } from 'react';

const EditCategoryModal = ({ open ,category, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
        description: '',
    });

    const fileRef = React.useRef();

    useEffect(() => {
        if (category && open) {
            setForm({
                name: category.name || '',
                description: category.description || '',
            });
        }
    }, [category, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        onClose();
    };

    if (!open) return null;

    return (
        <div className="apm-modal-bg">
            <div className="apm-modal apm-modal-row">
                <div className="apm-modal-col-form" style={{ flex: 1 }}>
                    <div className="apm-modal-header">
                        <span className="apm-modal-title">Edit Category</span>
                        <button className="apm-close-btn" onClick={onClose}>×</button>
                    </div>
                    <form className="apm-form" onSubmit={handleSubmit}>
                        <div className="apm-form-group">
                            <label>Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
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
                        <button className="apm-submit" type="submit">
                            Update Category
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModal;
