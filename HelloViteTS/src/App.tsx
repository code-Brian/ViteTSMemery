import './App.css'
import {Pet} from './components/Pet'
import {UserForm} from './components/UserForm'

function App() {
  const type = "Dog"
  const age = 9
  const color = "Tri-Color"
  return (
    <div>
      <h1>Hello Vite TypeScript Memes xD</h1>
      <p>Are you feeling it now, Mister Krabbs?</p>
      <p className="fart">Oh yes, I'm feeling it.</p>
      <Pet type={type} age = {age} color={color}/>
      <UserForm/>
    </div>
  )
}

export default App
