import './App.css';
import words from './words';
import Answer from './Answer';
import { useLocalStorage } from "./useLocalStorage";
import MyBoard from './MyBoard';

function App() {
  const [word, setWord] = useLocalStorage("theword", "");
  const [reset, setReset] = useLocalStorage("reset", false);

  const goReset = () => {
    setWord(words[Math.floor(Math.random()*words.length)].toLowerCase());
    if (reset) setReset(false);
  }
  const goRefresh = () => {
    window.location.reload(false);
  }
  if (word == null) return null;
  return (
    <div className='main bg-bej'>
      <h1 class="flex items-center text-5xl font-extrabold m-5 mt-5">
        WORDLE
        <span class="bg-kok text-xl font-semibold mr-2 px-2.5 py-0.5 rounded m-2">clone</span>
      </h1>
      <MyBoard word = {word} goReset={goReset}/>
      <Answer word={word} />
      <MyButtons goReset={goReset} goRefresh={goRefresh} />
     </div>
  );
}

const MyButtons = ({goReset, goRefresh}) => {
  return (
  <div className="flex gap-x-5">
      <button className="bg-kok shadow hover:bg-jasyl text-aq font-bold py-2 px-4 rounded-lg" onClick={goRefresh}>Refresh Table</button>
      <button className="bg-kok shadow hover:bg-jasyl text-aq font-bold py-2 px-4 rounded-lg" onClick={goReset}>Refresh Word</button>
  </div>);
}
export default App;
