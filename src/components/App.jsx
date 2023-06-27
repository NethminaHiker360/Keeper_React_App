import React from 'react';
import Login from './Login';

var isLogginedIn = false;

function renderConditionally() {
  if (isLogginedIn) {
    return <h1>Hello</h1>;
  } else {
    return (
      <div className="container">
      <Login/>
      </div>
    );
  }
}

function App() {
  return renderConditionally();
}

export default App;
