import { useState } from 'react'

const Header = (props) => (<h2>{props.name}</h2>)

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td> 
    <td>{value}</td></tr>
  )
}  

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const avg =  (clicks.good + clicks.bad * -1) / total
  const pos = (clicks.good/total)*100

  if (total == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
    <table>
      <tbody>
        <StatisticLine text="good" value={clicks.good} />
        <StatisticLine text="neutral" value={clicks.neutral} />
        <StatisticLine text="bad" value={clicks.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={pos} />
      </tbody>
    </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }
  
  const handleNeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClick = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  return (
    <div>
        <Header name="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Header name="Statistics" />
        <Statistics clicks={clicks} />
    </div>
  )
}

export default App