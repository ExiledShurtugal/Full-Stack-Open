import { useState } from 'react'


const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positive = total ? (good / total) * 100 : 0

  return (
    <div>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {total}<br />
      average {average}<br />
      positive {positive} %
    </div>
  )
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App