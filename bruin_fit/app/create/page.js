"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateEvent() {
  const [name, setName] = useState('');
  const router = useRouter();

  const createEvent = () => {
    const eventId = Math.random().toString(36).substring(2, 15);
    router.push(`/event/${eventId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Create Event</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded py-2 px-3 text-gray-700 mb-2"
        />
      </div>
      <button
        onClick={createEvent}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Create
      </button>
    </div>
  );
}
