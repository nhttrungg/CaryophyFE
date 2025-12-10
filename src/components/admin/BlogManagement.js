import React, { useState } from "react"
import { BlogForm } from "./AdminForms"

export function BlogManagement() {
    const [blogs, setBlogs] = useState([])
    const [editing, setEditing] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const handleSave = (data) => {
        if (editing !== null) {
            setBlogs(blogs.map((b, i) => i === editing ? { ...data } : b))
        } else {
            setBlogs([...blogs, data])
        }
        setShowForm(false); setEditing(null)
    }
    const handleEdit = (index) => {
        setEditing(index); setShowForm(true)
    }
    return (
        <div className="admin-panel">
            <div className="admin-panel__header">
                <h2>Quản lý blog</h2>
                <button className="btn btn--primary" onClick={() => { setShowForm(true); setEditing(null) }}>Thêm mới</button>
            </div>
            <table className="admin-table">
                <thead><tr>
                    <th>Tiêu đề</th><th>Tác giả</th><th>Ngày đăng</th><th></th>
                </tr></thead>
                <tbody>
                {blogs.map((b, i) => (
                    <tr key={i}>
                        <td>{b.title}</td><td>{b.author}</td><td>{b.date}</td>
                        <td><button className="btn" onClick={() => handleEdit(i)}>Sửa</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showForm && (
                <div className="admin-dialog-bg">
                    <div className="admin-dialog">
                        <BlogForm
                            onSubmit={handleSave}
                            initialData={editing !== null ? blogs[editing] : {}}
                        />
                        <button className="btn" onClick={() => { setShowForm(false); setEditing(null) }}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    )
}
