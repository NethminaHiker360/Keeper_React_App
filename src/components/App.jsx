import React from 'react';
import ContactCard from './ContactCard';
import contacts from '../contacts';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={contacts[0].imgURL}/> 
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
