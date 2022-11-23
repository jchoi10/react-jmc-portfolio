import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Project';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
