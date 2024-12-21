import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import HomeClientComponent from './components/HomeClientComponents';
import CreateEventForm from './components/CreateEvent';
import EventPage from './components/EventPage';
import Navbar from './components/Navbar';
import Login from './components/Login';

function Home() {
  return (
    <div>
      <HomeClientComponent />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEventForm />} />
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}