import React from 'react';

export default function ItemCard({ item, onSwap, onRedeem }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-4 items-center">
      <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded"/>
      <div className="flex-1">
        <div className="font-bold">{item.title}</div>
        <div className="text-sm text-gray-500">{item.category} | {item.size}</div>
        <div className="text-sm">{item.description}</div>
        <div className="mt-2 flex gap-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={onSwap}>Swap Request</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={onRedeem}>Redeem via Points</button>
        </div>
      </div>
      <div className="text-xs text-gray-400">{item.status}</div>
    </div>
  );
}