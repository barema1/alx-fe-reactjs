import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '16px auto', maxWidth: '400px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{userData.name}</h2>
      <p style={{ marginBottom: '4px' }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
