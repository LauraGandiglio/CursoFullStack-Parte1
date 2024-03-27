import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = bad + neutral + good;
  let positive =  ((good * 100) / total).toFixed(2);
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={total} positive={positive} />
    </div>
  );
};

export default App;
