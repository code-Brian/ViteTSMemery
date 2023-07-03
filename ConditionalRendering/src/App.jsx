import Unit from './components/Unit'
import UnitForm from './components/UnitForm'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Unit name={"Tank"} hp={100} dmg={25} armor={300}/>
        <Unit name={"Marine"} hp={25} dmg={2} armor={25}/>
        <UnitForm/>
      </div>
    </>
  )
}

export default App
