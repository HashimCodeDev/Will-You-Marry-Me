import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proposal from './proposal';
import Celebration from './celebration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Proposal />}
        />
        <Route
          path='/celebration'
          element={<Celebration />}
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
