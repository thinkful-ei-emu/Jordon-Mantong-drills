import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './accordion/Accordion';

function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb />
      <RouletteGun />
      <Accordion sections={[{ title: 'thing1', content: 'This is thing 1 content.' }, { title: 'thing2', content: 'This is thing 2 content.' }]} />
      {/* content goes here */}
    </main>
  );
}

export default App;