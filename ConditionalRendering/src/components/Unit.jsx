import {useState} from 'react'

const Unit = (props) => {
    const [currentHp, setCurrentHp] = useState(props.hp)
    return (
        <div>
            <h2>Hello, I'm a {props.name} Unit!</h2>
            <ul>
                <li>HP: {props.hp}</li>
                <li>DMG: {props.dmg}</li>
                <li>Armor: {props.armor}</li>
            </ul>
        </div>
    )
}

export default Unit
