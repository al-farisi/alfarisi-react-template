import React from 'react';
import { Router } from '@reach/router';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path='/'/>
      </Router>
    </div>
  );
}

export default App;
