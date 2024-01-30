import React from 'react';

const UserOptions = () => {
  const handleLogout = () => {
    // Logic for logging out the user
  };

  const handleProfileUpdate = () => {
    // Logic for updating the user profile
  };

  return (
    <div>
      <button onClick={handleProfileUpdate}>Update Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserOptions;
    