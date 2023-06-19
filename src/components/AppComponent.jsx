import React from 'react';

function AppComponent(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img
            src={props.src}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.number}</p>
          <p>{props.site}</p>
        </div>
      </div>
    </div>
  );
}

export default AppComponent;
