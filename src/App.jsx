
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'

function App() {

  function handleClick() {
    alert('button clicked')
  }
  function handleClick2() {
    alert('button 2 clicked')
  }

  const arrowFunc = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click</button>
      <button onClick={() => { alert("third alert") }}>Third</button>
      <button onClick={() => arrowFunc(5)}>Five</button>

    </>
  )
}

export default App
