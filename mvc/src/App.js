import React from 'react';
import { Searchbar, Sidebar } from './components';
import { useState } from 'react';

import './App.css';

const App = () => {

  const isSidebar = true;

  return (
    <div className="App">
      <h1>UWC2.0</h1>
      <h2><Searchbar /></h2>
      <h2>{isSidebar &&<Sidebar />}</h2>
      <h1>content</h1>
    </div>
  );
}

export default App;
