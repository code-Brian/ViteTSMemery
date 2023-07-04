import React from 'react'

type Props = {
    name: string
    age: number
}

const Person: React.FC<Props> = ({name, age }) => {
  return (
    <div>
        <h2>"Hello, my name is {name}!</h2>
        <h3>I am {age} years old</h3>
    </div>
  )
  }
  export default Person

