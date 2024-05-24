"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeClientComponent() {
  const [eventId, setEventId] = useState('');
  const router = useRouter();

  const joinEvent = () => {
    router.push(`/event/${eventId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bruin Fit</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="border rounded py-2 px-3 text-gray-700 mb-2"
        />
        <button
          onClick={joinEvent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Event
        </button>
      </div>
    </div>
  );
}
