import './App.css';
import words from './words';
import { useEffect, useState } from 'react';
import TheBoard from './TheBoard';

function App() {
  const [word, setWord] = useState("");
  useEffect(() => {
    setWord(words[Math.floor(Math.random()*words.length)]);
  }, [])

  return (
    <div>
      <h1> TODAY'S RANDOM WORD: {word} </h1>
      {/* <MyBoard word={word}/> */}
      <TheBoard />
    </div>
  );
}

export default App;
