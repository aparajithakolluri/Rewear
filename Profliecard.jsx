import React from 'react';

export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center gap-4">
      <img src={user.avatar || "/avatar-placeholder.png"} className="w-16 h-16 rounded-full" alt="Avatar"/>
      <div>
        <div className="font-bold text-lg">{user.username}</div>
        <div className="text-sm text-gray-500">{user.email}</div>
        <div className="mt-2 text-green-600 font-semibold">Points: {user.points}</div>
      </div>
    </div>
  );
}