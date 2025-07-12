import React from 'react';
// import Carousel from '../components/Carousel';
// import Carousel from '../components/Carousel';
import Carousel from './components/Carousel';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  { title: "Blue Denim Jacket", image: "./src/image1.jpeg", category: "Outerwear" },
  { title: "Red Party Dress", image: "/demo-dress.jpg", category: "Dresses" },
  { title: "Graphic Tee", image: "/demo-tee.jpg", category: "Tops" },
];

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-2">ReWear</h1>
      <p className="mb-6 text-lg text-gray-700">Community Clothing Exchange — Swap, Redeem, Repeat!</p>
      <div className="flex gap-4 mb-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold" onClick={() => navigate('/dashboard')}>Start Swapping</button>
        <button className="bg-gray-200 px-6 py-2 rounded-lg font-semibold" onClick={() => navigate('/dashboard')}>Browse Items</button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold" onClick={() => navigate('/add-item')}>List an Item</button>
      </div>
      <div className="w-full max-w-4xl">
        <div className="mb-4 font-semibold text-lg">Featured Items</div>
        <Carousel items={featuredItems}/>
      </div>
    </div>
  );
}