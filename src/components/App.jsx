import React from 'react';
import ContactCard from './ContactCard';
import contacts from '../contacts';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <ContactCard
          name={contact.name}
          image={contact.imgURL}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default App;
