"use client";

import { useRouter } from 'next/navigation';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import TimeDragger from '../../components/TimeDragger';
import UserAvailabilities from '../../components/UserAvailabilities';
import ManageTeams from '../../components/ManageTeams';
import '../../../styles/timedragger.css';
import { db, auth } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import withAuth from '../../components/withAuths';

function Event({ params }) {
  const { id } = params;
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const user = auth.currentUser;

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  const handleTimeSelect = (times) => {
    setSelectedTimes(times);
  };

  const saveAvailability = async () => {
    if (user) {
      try {
        await setDoc(doc(db, 'availabilities', `${id}_${user.uid}`), {
          userId: user.uid,
          eventId: id,
          dates: selectedDates,
          times: selectedTimes,
        });
        alert('Availability saved successfully');
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Please log in first');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Event: {id}</h1>
      <Calendar
        selectRange
        onChange={handleDateChange}
        value={selectedDates}
        className="mb-4"
      />
      <TimeDragger onTimeSelect={handleTimeSelect} />
      <button
        onClick={saveAvailability}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Save Availability
      </button>
      <UserAvailabilities eventId={id} />
      <ManageTeams />
    </div>
  );
}

export default withAuth(Event);
