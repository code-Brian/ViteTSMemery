import {useState} from 'react'

interface FormData {
    firstName: string
    email: string
    password: string
}

export const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState(
        {
            firstName: '',
            email: '',
            password: ''
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(formData.email.length < 3) {
            setErrors({...errors, email: "Email is less than three characters!"})
            console.log("Email is less than 3 characters!")
        }
        console.log(formData)
    }

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name: </label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            {
                errors.email ? <p>{errors.email}</p> : null
            }
        </div>
        <div>
            <label>Email: </label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Password: </label>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <button>Create User</button>
    </form>
    )
}
