import { useState } from 'react'

const Header = (props) => (<h2>{props.name}</h2>)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const maxAnecdoteIndex = points.indexOf(Math.max(...points))
  

  const addVote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  const [selected, setSelected] = useState(0)

  

  return (
    <div>
      <Header name="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button handleClick={() => addVote()}  text="vote"/>
      <Button handleClick={() => 
        setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>

      <Header name="Anecdote with most votes" />
      <div>{anecdotes[maxAnecdoteIndex]}</div>
      <div>has {points[maxAnecdoteIndex]} votes</div>
    </div>
  )
}

export default App