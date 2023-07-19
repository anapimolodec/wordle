import './App.css';
import words from './words';
import { useEffect, useState } from 'react';
import TheBoard from './TheBoard';

function App() {
  const [word, setWord] = useState("");
  const [typing, setTyping] = useState("");
  useEffect(() => {
    setWord(words[Math.floor(Math.random()*words.length)]);
  }, [])
  const isLetter = (char) => {
    const charCode = char.toLowerCase().charCodeAt(0);
    return (char.length === 1 && charCode >= 97 && charCode <= 122);
  }
  const onTyping = event => {
    if (event.key === "Backspace") {
      setTyping(typing.slice(0, -1));
    } else if (event.key === "Enter" && typing.length === 5) {
      console.log("guess: ",typing);
    } else if (isLetter(event.key) && typing.length < 5) {
      setTyping(typing + event.key.toLowerCase());
    }
  }

  // useEffect(() => {
  //   window.addEventListener('keydown', onTyping);

  //   return () => window.removeEventListener('keydown', onPressKey);
  // }, [typing])
  return (
    <div>
      <h1> TODAY'S RANDOM WORD: {word} </h1>
      {/* <MyBoard word={word}/> */}
      <TheBoard word={word}/>
      <div  tabIndex={0} onKeyDown={onTyping}> current guess: {typing}  </div>
        
    </div>
  );
}

export default App;
