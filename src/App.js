import './App.css';
import words from './words';
import { useEffect, useState } from 'react';

const WORD_LEN = 5;
const LINES = 6;

function App() {
  const [word, setWord] = useState("");
  const [typing, setTyping] = useState("");
  const [lines, setLine] = useState(new Array(LINES).fill(''));
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setWord(words[Math.floor(Math.random()*words.length)].toLowerCase());
  }, [])
  const isLetter = (char) => {
    const charCode = char.toLowerCase().charCodeAt(0);
    return (char.length === 1 && charCode >= 97 && charCode <= 122);
  }
  const onTyping = event => {
    if (lines.includes(word) || index > 5) {
      console.log("CONGRATULATIONS!!!")
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
    <div>
      <h1> TODAY'S RANDOM WORD: {word} </h1>
      <div className='board' tabIndex={0} onKeyDown={onTyping}>
        {lines.map((line, i) => {
          return <OneLine 
            key={i} 
            line={(i === index ? typing : line).padEnd(WORD_LEN)}
            toCheck = {index > i || index === -1}
            word = {word} />;
        })}
      </div>
        
    </div>
  );
}
const OneLine = ({line, toCheck, word}) => {
return (
  <div className='line'>
    { 
    line.split('').map((char, i) => {
      let classname = 'tile';
      if (toCheck) {
        if (char === word[i]) {
          classname += ' correct';
        } else if (word.includes(char)) {
          classname += ' close';
        } else {
          classname += ' incorrect';
        }
      }
    return <div key={i} className={classname}> {char}</div>;
  })
  }
  </div>
);
}
export default App;
