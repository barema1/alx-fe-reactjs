import { useContext } from 'react';
import UserContext from './components/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
