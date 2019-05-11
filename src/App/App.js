import React from 'react';
import { Route, Link } from 'react-router-dom';
import IncDecApp from '../IncDecApp/IncDec';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link> |
        <Link to="/inc-dec-app"> Increment-Decrement App</Link> |
        <Link to="/about-us"> About</Link>
      </header>

      <main>
        <Route
          exact
          path="/"
          render={() => {
            return <h1>Hello</h1>;
          }}
        />
        <Route path="/inc-dec-app" component={IncDecApp} />
        <Route
          exact
          path="/about-us"
          render={() => {
            return <h1>About Us</h1>;
          }}
        />
      </main>
    </div>
  );
}

export default App;
