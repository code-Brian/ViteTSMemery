import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, Vite!</h1>
      <p>This button is a <span>test</span>.</p>
      <button onClick={()=> alert("This button has been clicked!")}>Click Meh</button>
      <Person firstName={"Jeffery"} lastName={"Epstein"} height={0} initialNetWorth={99999999}/>
      <Person firstName={"Ben"} lastName={"Shapiro"} height={0} initialNetWorth={1000000}/>
      <PersonForm/>
    </>
  )
}

export default App
