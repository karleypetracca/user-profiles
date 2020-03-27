import React from "react";
import UserCard from "./components/UserCard.jsx";
import "./App.css";
import "bulma/css/bulma.css";
import { Section, Container, Columns, Column } from "bloomer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>User Profiles Generator</p>
      </header>
      <Section>
        <Container>
          <Columns>
            <Column >
              <UserCard />
            </Column>
            <Column >
              <UserCard />
            </Column>
            <Column >
              <UserCard />
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}

export default App;
