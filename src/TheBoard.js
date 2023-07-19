import './App.css';
import { useState, useEffect } from 'react';

const TheBoard = ({word}) => 
{
    return (
        <div>
            <h1>word to solve is : {word} </h1>
            <MyAttempt />
        </div>
    );

}

const MyAttempt = () => {
    const [typing, setTyping] = useState('');
    

   

    const checkGuess = () => {
      
    }

    return (
    <div className="line">
        <button onClick={checkGuess}>Check Word</button>
    </div>
    );
}
export default TheBoard;

// const TheBoard = ({word}) => {
//     const [lines, setLine] = useState(Array(5).fill(null));
//     const [currentGuess, setCurrentGuess] = useState('');

//     useState(() => {
//     const onPress = event => {
//             //if last
//             if (lines[5] != null || lines.includes(word)) {
//                 return ;
//             }
//             const char = event.key.toLowerCase();
//             setCurrentGuess(prevGuess => {
//                 if (event.key === 'Backspace') {
//                     return prevGuess.slice(0, -1);
//                 } else if (event.key === 'Enter' && prevGuess.length === 5) {
//                     const currentLine = lines.findIndex(line => line == null);
//                     const linesClone = [...lines];
//                     linesClone[currentLine] = prevGuess;
//                     setLine(linesClone);
//                     return '';
//                 } else if (prevGuess.length < 5) {
//                     return (prevGuess + event.key.toLowerCase());
//                 }
//                 return prevGuess;
//             });
//         }

//         window.addEventListener('keydown', onPress);

//         return () => window.removeEventListener('keydown', onPress);
//         //listening to typing
//     }, [lines, word])

//     const currentIndex = lines.findIndex(line => line == null);
//     return (
//         <div className="board">
//             {lines.map((line, i) => {
//                 return (
//                 <Line 
//                     key = {i}
//                     line = {(i === currentIndex ? currentGuess : line ?? '').padEnd(5)}
//                     word={word}
//                     isFinal={currentIndex > i || currentIndex == -1}
//                     />
//                 );
//                 })
//             }
//         </div>
//     );
// }

// const Line = ({line}) => {
//     return (
//         <div className='line'>
//             {line.split('').map((char, i) => {
//                 return <div className='tile' key={i}>{char}</div>})}
//         </div>
//     );
// }
// export default TheBoard;