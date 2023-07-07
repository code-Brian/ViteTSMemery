import {useState} from 'react'

export const UserForm: React.FC = () => {

  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const newUser = {userName, email, password}

  const createUser = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("form submitted!")
    console.log(newUser)
    console.log("form reset")
    setUserName("")
    setEmail("")
    setPassword("")
  }

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setUserName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <form onSubmit={createUser}>
        <div>
            <label>Username: </label>
            <input type="text" name="name" value={userName} onChange={handleUserNameChange}/>
        </div>
        <div>
            <label>Email: </label>
            <input type="text" name="email" value={email} onChange={handleEmailChange}/>
        </div>
        <div>
            <label>Password: </label>
            <input type="text" name="password" value={password} onChange={handlePasswordChange}></input>
        </div>
        <button>Create New User</button>
        <h3>Current form data values:</h3>
        <ul>
            <li>Username: {userName}</li>
            <li>Email: {email}</li>
            <li>Password: {password}</li>
        </ul>
    </form>
  )
}
