import React from 'react';
import Stars from './Stars';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Stars count={5} />
    </div>
  );
}

export default App;
