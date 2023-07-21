import './App.css';
import { useEffect, useState } from 'react';
import OneLine from './OneLine';


const MyBoard = ({word, goReset}) => {
    const WORD_LEN = 5;
    const LINES = 6;
    const [typing, setTyping] = useState("");
    const [lines, setLine] = useState(new Array(LINES).fill(''));
    const [index, setIndex] = useState(0);
    const [reset, setReset] = useState(false);
    useEffect(() => {
      if (lines.includes(word)) {
        console.log("congratualations????");
      } else if (index > 5) {
        console.log("gameover");
      }
    },[lines])

    const isLetter = (char) => {
        const charCode = char.toLowerCase().charCodeAt(0);
        return (char.length === 1 && charCode >= 97 && charCode <= 122);
      }
    const onTyping = event => {
        if (lines.includes(word) || index > 5) {
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
    return (
    <div className='board flex gap-3 flex-col p-3' tabIndex={0} onKeyDown={onTyping}>
        {lines.map((line, i) => {
          return <OneLine 
            key={i} 
            line={(i === index ? typing : line).padEnd(WORD_LEN)}
            toCheck = {index > i || index === -1}
            word = {word} />;
        })}
      </div>
    );
    
}

export default MyBoard;