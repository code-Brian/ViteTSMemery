import './App.css'
import Person from './components/Person'

function App() {
  const name = "Billy"
  const age = 15
  return (
    <div>
      <h1>Hello Vite TypeScript Memes xD</h1>
      <p>Are you feeling it now, Mister Krabbs?</p>
      <p className="fart">Oh yes, I'm feeling it.</p>
        <Person name={name} age ={age}/>
    </div>
  )
}

export default App
