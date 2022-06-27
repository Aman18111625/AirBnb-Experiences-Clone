import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import data from './data';
import './App.css';

function App() {

  const cards = data.map(item =>{
      return (
        <Card
        key={item.id}
        {...item}
        />
      )
  });

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App;
