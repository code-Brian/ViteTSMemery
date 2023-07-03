import { useState } from 'react'

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [height, setHeight] = useState("")
    const [netWorth, setNetWorth] = useState("")

    const createPerson = (e) => {
        e.preventDefault()
        const newPerson = {firstName, lastName, height, netWorth}
        setFirstName("")
        setLastName("")
        setHeight("")
        setNetWorth("")
        console.log("Hello", newPerson.firstName)
    }

    return(
        <div>
            <form onSubmit={ createPerson }>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Height</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div>
                    <label>Net Worth</label>
                    <input type="number" value={netWorth} onChange={(e) => setNetWorth(e.target.value)}/>
                </div>
                <input type="submit" value="Create Person"/>
            </form>

            <h2>Live Data View</h2>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{height}</p>
            <p>{netWorth}</p>
        </div>
    )
}
export default PersonForm