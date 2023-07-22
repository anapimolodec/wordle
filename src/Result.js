import Confetti from 'react-confetti';

export const Winner = ({goReset}) => {
    return (
    <>
        <div className="mt-5 p-5 mx-auto text-center flex flex-col justify-center align-center border-aq bg-jasyl rounded-lg shadow">
            <h5 className="text-xl font-semibold text-aq font-extrabold uppercase">Congratulations!</h5>
            <button onClick={goReset} className="mt-5 bg-kok shadow hover:bg-bej text-aq hover:text-jasyl font-bold py-2 px-4 rounded-lg">One more game!</button>
        </div>
        <Confetti 
            numberOfPieces={500}
            recycle={false}/>
    </>
    );
}

export const Loser = ({goReset, word}) => {
    return (
        <div className="mt-5 p-5 mx-auto text-center flex flex-col justify-center align-center border-aq bg-sary rounded-lg shadow">
            <h5 className="text-xl font-semibold font-extrabold"> Sorry, next time? </h5>
            <p> The answer was: <span className='font-semibold'>{word}</span></p>
            <button onClick={goReset} className="mt-5 bg-kok shadow hover:bg-bej text-aq hover:text-jasyl font-bold py-2 px-4 rounded-lg">One more game!</button>
        </div>
        );
}