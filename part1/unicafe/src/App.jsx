import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {

  }
  return (
    <div>
      <div class="feedback">
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      </div>
      <br/>
      <div class="statistics">
      <h2>Statistics</h2>
      <br/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good+neutral+bad)/3}</p>
      <p>positive {good/(good+neutral+bad)*100}%</p>
      </div>
    </div>
  )
}

export default App