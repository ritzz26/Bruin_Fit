import { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ManageTeams() {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState({});
  const [teamName, setTeamName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = querySnapshot.docs.map(doc => doc.data());
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUsers(prevSelectedUsers =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter(id => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  const createTeam = async () => {
    try {
      await setDoc(doc(db, 'teams', teamName), {
        name: teamName,
        members: selectedUsers,
      });
      alert('Team created successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Manage Teams</h2>
      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <input
              type="checkbox"
              checked={selectedUsers.includes(user.uid)}
              onChange={() => handleUserSelect(user.uid)}
            />
            {user.email}
          </li>
        ))}
      </ul>
      <button onClick={createTeam}>Create Team</button>
      <div>
        <h3>Team Availabilities</h3>
        {/* Display team availabilities here */}
      </div>
    </div>
  );
}
