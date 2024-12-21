import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EventPage() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    async function fetchEventData() {
      const response = await fetch(`/api/events/${eventId}`);
      const data = await response.json();
      setEventData(data);
    }
    fetchEventData();
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{eventData.name}</h1>
      <p className="text-lg my-2">{eventData.description}</p>
      {/* Add more event details and interactions */}
    </div>
  );
}
