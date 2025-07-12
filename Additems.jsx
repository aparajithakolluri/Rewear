import React, { useState } from 'react';

export default function AddItem() {
  const [form, setForm] = useState({
    title: '', description: '', category: '', type: '', size: '', condition: '', tags: '', images: []
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Submit logic here
    alert('Item submitted!');
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white rounded shadow p-8">
      <h2 className="font-bold text-2xl mb-4">List New Item</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} value={form.title} placeholder="Title" className="w-full border p-2 rounded" required />
        <textarea name="description" onChange={handleChange} value={form.description} placeholder="Description" className="w-full border p-2 rounded" required />
        <input name="category" onChange={handleChange} value={form.category} placeholder="Category" className="w-full border p-2 rounded" required />
        <input name="type" onChange={handleChange} value={form.type} placeholder="Type" className="w-full border p-2 rounded" required />
        <input name="size" onChange={handleChange} value={form.size} placeholder="Size" className="w-full border p-2 rounded" required />
        <input name="condition" onChange={handleChange} value={form.condition} placeholder="Condition" className="w-full border p-2 rounded" required />
        <input name="tags" onChange={handleChange} value={form.tags} placeholder="Tags (comma separated)" className="w-full border p-2 rounded" />
        {/* Image upload placeholder */}
        <div className="flex gap-2">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
}