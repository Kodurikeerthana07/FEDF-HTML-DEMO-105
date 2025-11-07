import React from 'react';

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

export default function App() {
  return (
    <div>
      <h1>React Component Demo</h1>
      <Welcome name="Student" />
    </div>
  );
}