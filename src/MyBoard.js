import './App.css';
import { useState } from 'react';
import OneLine from './OneLine';
import {Winner, Loser} from './Result';

const MyBoard = ({word, goReset}) => {
    const WORD_LEN = 5;
    const LINES = 6;
    const [typing, setTyping] = useState("");
    const [lines, setLine] = useState(new Array(LINES).fill(''));
    const [index, setIndex] = useState(0);
    const [res, setRes] = useState(null);

    const isLetter = (char) => {
        const charCode = char.toLowerCase().charCodeAt(0);
        return (char.length === 1 && charCode >= 97 && charCode <= 122);
      }
    const onTyping = event => {
        if (lines.includes(word)) {
          setRes(true);
          return ;
        } else if (index > 5) {
          setRes(false);
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
          if (typing === word) { setRes(true); }
          else if (index === 5) { setRes(false); }
        } else if (isLetter(event.key) && typing.length < WORD_LEN) {
          setTyping(typing + event.key.toLowerCase());
        }
    }
    return (
      <div className=''>
        <div className='board flex gap-3 flex-col p-3' tabIndex={0} onKeyDown={onTyping}>
          {lines.map((line, i) => {
            return <OneLine 
              key={i} 
              line={(i === index ? typing : line).padEnd(WORD_LEN)}
              toCheck = {index > i || index === -1}
              word = {word} />;
          })}
        </div>
        <div> {res ? <Winner goReset={goReset} /> : (res === false ? <Loser goReset={goReset} word={word}/> : null)} </div>
      </div>
    );
    
}

export default MyBoard;