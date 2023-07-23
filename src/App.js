import React from 'react';
import './App.css';
import Titulo from './components/Titulo';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Titulo />
      </div>

      <FormContainer />
    </div>
  );
}

export default App;
