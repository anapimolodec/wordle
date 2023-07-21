const OneLine = ({line, toCheck, word}) => {
    return (
      <div className='line'>
        { 
        line.split('').map((char, i) => {
          let checking = 'h-11 w-11 p-6 font-semibold leading-9 rounded-lg shadow capitalize flex justify-center items-center';
          if (toCheck) {
            if (char === word[i]) {
              checking += ' bg-jasyl';
            } else if (word.includes(char)) {
              checking += ' bg-sary';
            } else {
              checking += ' bg-bej';
            }
          } else {
            checking += ' bg-aq';
          }
          
        return <div key={i} className={checking}> {char}</div>;
      })
      }
      </div>
    );
}

export default OneLine;
