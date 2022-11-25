import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ProjectList from './components/ProjectList';

function App() {
  const [categories] = useState([
    {name: 'Work', description: 'Past coding work examples; web application'},
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <ProjectList></ProjectList>
        <About></About>
      </main>
    </div>
  );
}

export default App;
