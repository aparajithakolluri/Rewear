import React from 'react';

export default function Carousel({ items }) {
  return (
    <div className="w-full flex gap-4 overflow-x-auto py-4">
      {items.map((item, idx) => (
        <div key={idx} className="min-w-[220px] bg-white rounded-lg shadow p-2 flex flex-col items-center">
          <img src={item.image} alt={item.title} className="w-32 h-40 object-cover rounded"/>
          <div className="font-semibold mt-2">{item.title}</div>
          <div className="text-xs text-gray-500">{item.category}</div>
        </div>
      ))}
    </div>
  );
}