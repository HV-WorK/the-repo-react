import React from 'react';

const HamburgerMenu = ({ setCurrentView }) => {
  return (
    <div>
      <button onClick={() => setCurrentView('tree')}>Tree View</button>
      <button onClick={() => setCurrentView('graph')}>Graph View</button>
      {/* Add additional menu items as needed */}
    </div>
  );
};

export default HamburgerMenu;
