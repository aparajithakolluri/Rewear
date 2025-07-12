import React from 'react';

const pendingItems = [
  { title: "Checkered Shirt", id: 1 },
  { title: "Vintage Jeans", id: 2 },
];

export default function AdminPanel() {
  function approve(id) {
    alert(`Approved item ${id}`);
  }
  function remove(id) {
    alert(`Removed item ${id}`);
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded shadow p-8">
      <h2 className="font-bold text-2xl mb-4">Admin Panel</h2>
      <ul>
        {pendingItems.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <span>{item.title}</span>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => approve(item.id)}>Approve</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => remove(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}