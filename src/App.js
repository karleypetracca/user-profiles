import React from 'react';
import UserCard from "./components/UserCard.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          User Profiles Generator
        </p>
      </header>
      <section className="profiles">
        <div className="row">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </section>
    </div>
  );
}

export default App;
