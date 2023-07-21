import { useState } from "react"

const Answer = ({word}) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }


  return (
    <div className="flex flex-col align-center m-5">
    <label htmlFor="checkbox" className="flex justify-between ml-auto relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="checkbox"
        class="sr-only peer"
        checked={isChecked}
        onChange={checkHandler}
        
      />
      <div class="w-11 h-6 bg-sary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-kok rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-aq after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-jasyl"></div>
      <span className="ml-3"> {isChecked ? "Hide Answer" : "Show Answer"}</span>
      
    </label>
    {isChecked ? <p className="mt-3">The word is: <span className="text-jasyl font-extrabold uppercase">{word}</span></p> : <p> </p>}
    </div>
  )
}

export default Answer;