import {useState} from 'react'

const UnitForm = () => {
    const[name, setName] = useState("")
    const[hp, setHp] = useState(0)
    const[dmg, setDmg] = useState(0)
    const[armor, setArmor] = useState(0)
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUnit = (e) => {
        e.preventDefault()

        const newUnit = {
            name,
            hp,
            dmg,
            armor
        }
        console.log(newUnit)
        setName("")
        setHp(0)
        setDmg(0)
        setArmor(0)

        setHasBeenSubmitted(true)
    }

    return(
        <form onSubmit={createUnit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>HP</label>
                <input type="number" value={hp} onChange={(e) => setHp(e.target.value)}/>
            </div>
            <div>
                <label>DMG</label>
                <input type="number" value={dmg} onChange={(e) => setDmg(e.target.value)}/>
            </div>
            <div>
                <label>ARMOR</label>
                <input type="number" value={armor} onChange={(e) => setArmor(e.target.value)}/>
            </div>
            {
                hasBeenSubmitted ? 
                <input disabled type="submit" value="Thanks for creating a new unit!"/> :
                <input type="submit" value="Create New Unit"/>
            }
            
        </form>
    )
}
export default UnitForm