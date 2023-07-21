import './App.css';
import words from './words';
import React, { useState } from 'react';
import OneLine from './OneLine';
import Answer from './Answer';
import { useLocalStorage } from "./useLocalStorage";

const WORD_LEN = 5;
const LINES = 6;

function App() {
  const [word, setWord] = useLocalStorage("theword", "");
  const [reset, setReset] = useLocalStorage("reset", false);
  const [typing, setTyping] = useState("");
  const [lines, setLine] = useState(new Array(LINES).fill(''));
  const [index, setIndex] = useState(0);
  const goReset = () => {
    setWord(words[Math.floor(Math.random()*words.length)].toLowerCase());
    setReset(false);
    window.location.reload(false);
  }
  const isLetter = (char) => {
    const charCode = char.toLowerCase().charCodeAt(0);
    return (char.length === 1 && charCode >= 97 && charCode <= 122);
  }
  const onTyping = event => {
    if (lines.includes(word) || index > 5) {
      setReset(true);
      return ;
    }
    if (event.key === "Backspace") {
      setTyping(typing.slice(0, -1));
    } else if (event.key === "Enter" && typing.length === WORD_LEN) {
      let linesClone = [...lines];
      linesClone[index] = typing;
      setLine(linesClone);
      setIndex(index => index + 1);
      setTyping('');
    } else if (isLetter(event.key) && typing.length < WORD_LEN) {
      setTyping(typing + event.key.toLowerCase());
    }
  }
  if (word == null) return null;
  
  return (
    <div className='main bg-bej' tabIndex={0} onKeyDown={onTyping}>
      <h1 class="flex items-center text-5xl font-extrabold m-5 mt-5">
        WORDLE
        <span class="bg-kok text-xl font-semibold mr-2 px-2.5 py-0.5 rounded m-2">clone
        </span>
      </h1>

      <div className='board'>
        {lines.map((line, i) => {
          return <OneLine 
            key={i} 
            line={(i === index ? typing : line).padEnd(WORD_LEN)}
            toCheck = {index > i || index === -1}
            word = {word} />;
        })}

      </div>
      <Answer word={word} />
      
      <p> Update the page to reset the table, and click the button below to get another word!</p>
      <button onClick={goReset}>Change the word</button>
     </div>

  );
}

export default App;
