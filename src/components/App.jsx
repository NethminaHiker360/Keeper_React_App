import React from 'react';

var isLogginedIn = false;

function renderConditionally() {
  if (isLogginedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <div className="container">
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

function App() {
  return renderConditionally();
}

export default App;
