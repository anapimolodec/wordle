# Simple Wordle Game on ReactJS with TailwindCSS.

This project is a part of my education on [FrontEndExpert]().

In the original project, the app fetched a list of words from a REST API. However, in this implementation it retrieves the 'word of the day' from the local list from the FrontEnd expert [API](https://api.frontendexpert.io/api/fe/wordle-words).

I used [Tailwind](https://tailwindcss.com/docs/installation) CSS to make the app prettier with the custom colors using this color [palette](https://colorhunt.co/palette/a1ccd1f4f2dee9b3847c9d96).

The custom hook, [useLocalStorage Hook](https://blog.logrocket.com/using-localstorage-react-hooks/), was used to store the fetched word in the local storage and reset it only when user wants to get a new word. The table with inputs is updated upon relaod of the page.

If the user wins, there is a winner message and a confetti by [react-confetti](https://www.npmjs.com/package/react-confetti).
If the user loses, the answer is shown and in both cases user can start another game.


### To run,
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Great Refenrences:
- [useLocalStorage Hook](https://blog.logrocket.com/using-localstorage-react-hooks/).
- [react-confetti](https://www.npmjs.com/package/react-confetti).