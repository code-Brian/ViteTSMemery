import {PetForm} from './PetForm'

type Props = {
    type: string
    age: number
    color: string
}

export const Pet: React.FC<Props> = ({type, age, color}) => {

    return (
        <div>
            <h2>Hello, I am a {type}!</h2>
            <ul>
                <li>I am {age} years old.</li>
                <li>I am a {color} {type}.</li>
            </ul>
            <PetForm/>
        </div>
    )
}
