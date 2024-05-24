import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function UserAvailabilities({ eventId }) {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    const fetchAvailabilities = async () => {
      const querySnapshot = await getDocs(collection(db, 'availabilities'));
      const availabilitiesData = querySnapshot.docs.map(doc => doc.data());
      setAvailabilities(availabilitiesData.filter(a => a.eventId === eventId));
    };
    fetchAvailabilities();
  }, [eventId]);

  return (
    <div>
      <h2>User Availabilities</h2>
      <ul>
        {availabilities.map((availability, index) => (
          <li key={index}>
            User: {availability.userId}, Dates: {availability.dates.join(', ')}, Times: {availability.times.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
