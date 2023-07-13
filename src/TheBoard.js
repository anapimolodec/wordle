import './App.css';
import { useState } from 'react';
const TheBoard = () => {
    const [lines, setLine] = useState(Array(5).fill('     '));
    return (
        <div className="board">
            {lines.map((line, i) => {
                return <div className='line' key={i}>
                    {line.split('').map((char, i) => {return <div className='tile' key={i}>{char}</div>})}
                    </div>
                })}
        </div>
    );
}

export default TheBoard;