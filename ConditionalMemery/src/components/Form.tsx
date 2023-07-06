import {useState} from 'react'

export const Form: React.FC = () => {
    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [zipCode, setZipCode] = useState<number>(0)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false)

    const createNewUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("createNewUser was submitted!")
        // Additional form logic will go here
        const newUser = {userName, email, password, zipCode}
        console.log(newUser)
        // After form logic processes, reset the fields to empty/default values
        setHasBeenSubmitted(true)
        setUserName("")
        setEmail("")
        setPassword("")
        setZipCode(0)
    }

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = parseInt(event.target.value)
        setZipCode(value)
    }

    const formMessage = () => {
        return hasBeenSubmitted ? "Thank you for submitting the form!" : "Welcome! Please submit the form."
    }

    return (
        <form onSubmit={createNewUser}>
            <h2>{formMessage()}</h2>
            <div>
                <label>Username: </label>
                <input type="text" name="userName" value={userName} onChange={handleUserNameChange}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name="email" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <label>Zip Code: </label>
                <input type="number" name="zipCode" value={zipCode} onChange={handleZipCodeChange}/>
            </div>
            <button>Create User</button>
        </form>
    )
}
