import React from 'react';
import ContactCard from './ContactCard';
import contacts from '../contacts';
import Avatar from './Avatar';

function createCard(contact) {
  return (
    <ContactCard
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={contacts[0].imgURL} />
      {contacts.map(createCard)}

      {/* <ContactCard
        name={contacts[0].name}
        image={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      /> */}
    </div>
  );
}

export default App;
