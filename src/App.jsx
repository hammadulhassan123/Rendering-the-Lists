import { useState } from 'react'
import './App.css'

function App() {
  const jokes = [
  {
      id:1,
    joke: "I used to be a banker, but then I lost interest!",
    rating: 3
  },
  {
    id:2,
    joke:"I am afraid for the calender, but its days are numbered. ",
    rating: 4,
  },
  {
    id:3,
    joke:"What has two legs and bleeds? Half a dog. ",
    rating: 5,
  },
  {
    id:4,
    joke:"Two goldfish are in a tank. One turns to another and says do you know to drive this thing?. ",
    rating: 2,
  },
]
  
const jokesComponents = jokes.filter(joke=> joke.rating >= 3).map(joke => (<li>{ "ID: "  +joke.id + " JOKE: "+ joke.joke+" RATING: "+ joke.rating}</li>) )


return (
    <div className="App">
       <h1>Dad Jokes</h1>
       <ul>{jokesComponents}</ul>
    </div>
  )
}

export default App
