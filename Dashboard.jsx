import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ItemCard from '../components/ItemCard';

const demoUser = {
  username: "Aparajitha",
  email: "apa@example.com",
  points: 42,
  avatar: "/avatar-placeholder.png",
};

const uploadedItems = [
  { title: "Green Hoodie", image: "/demo-hoodie.jpg", category: "Tops", size: "M", description: "Soft cotton, barely used", status: "available" },
  { title: "Khaki Pants", image: "/demo-pants.jpg", category: "Bottoms", size: "L", description: "Comfort fit", status: "swapped" },
];

const swaps = [
  { title: "Red Dress", image: "/demo-dress.jpg", category: "Dresses", size: "S", description: "Swap completed", status: "completed" },
  { title: "Blue Denim Jacket", image: "/demo-jacket.jpg", category: "Outerwear", size: "M", description: "Pending approval", status: "pending" },
];

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8">
      <ProfileCard user={demoUser}/>
      <div>
        <h2 className="font-bold text-xl mb-2">Your Uploaded Items</h2>
        <div className="space-y-4">
          {uploadedItems.map((item, idx) =>
            <ItemCard key={idx} item={item} onSwap={() => {}} onRedeem={() => {}} />
          )}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-2">Ongoing & Completed Swaps</h2>
        <div className="space-y-4">
          {swaps.map((item, idx) =>
            <ItemCard key={idx} item={item} onSwap={() => {}} onRedeem={() => {}} />
          )}
        </div>
      </div>
    </div>
  );
}