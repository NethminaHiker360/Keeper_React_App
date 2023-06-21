import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <ContactCard
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        email="b@beyonce.com"
        phone="+123 456 789"
      />
    </div>
  );
}

export default App;
