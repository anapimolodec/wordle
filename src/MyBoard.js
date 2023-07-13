// import './App.css';
// import { useEffect, useState } from 'react';

// const MyBoard = ({word}) => {
//     if (word == null) return;
//     const WORD_LEN = 5;
//     const WORD_CNT = 6;
//     const [guesses, setGuesses] = useState(Array(WORD_CNT).fill(null));

//     useEffect(() => {
        
//     }, [guesses, word]);

//     const currentGuessIndex = guesses.findIndex(guess => guess == null)
//     return (
//         <div className='board'>
//             {guesses.map((guess, i) => {
//                 let fillGuess = (guess === currentGuessIndex ? currentGuess : guess ?? '').padEnd(WORD_LEN);
//                 return (
//                     <GuessLine 
//                     key = {i}
//                     guess={fillGuess}
//                     word={word}
//                     />
//                 );
//             })}

//         </div>
//     );
// }
// const GuessLine = (props) => {
//     return (
//         <div className='line'>
//                     {guess.split('').map((char, i) => {
//                         return (
//                         <div className='tile' key={i}>
//                             {char}
//                         </div>
//                         );
//                     })}
//                 </div>
//     );
    
// }
// export default MyBoard;

