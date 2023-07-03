import { useState } from 'react'

const Person = (props) => {
    const [netWorth, setNetWorth] = useState(props.initialNetWorth)
    return (
        <div>
            <h2>I am <span className="theperson">the</span> Person.</h2>
            <ul>
                <li>First name: {props.firstName} </li>
                <li>Last name: {props.lastName}</li>
                <li>Height(cm): {props.height}</li>
                <li>Net worth: ${netWorth}</li>
            </ul>
            <button onClick={(event) => setNetWorth(netWorth+500)}>Increase NetWorth</button>
            <button onClick={(event) => setNetWorth(netWorth-500)}>Decrease NetWorth</button>
        </div>
    )
}
export default Person;