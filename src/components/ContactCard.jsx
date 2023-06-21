import React from 'react';

function ContactCard(props) {
  const name = props.name;
  const image = props.image;
  const email = props.email;
  const phone = props.phone;

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img className="circle-img" src={image} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{phone}</p>
        <p className="info">{email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
