import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li><Link to="details">View Details</Link></li>
          <li><Link to="settings">Edit Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default Profile;