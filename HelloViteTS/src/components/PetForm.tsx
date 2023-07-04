import {useState} from 'react'

export const PetForm = () => {
  const [quantity, setQuantity] = useState<number>(0)
  const adoptPet = () => {
    setQuantity(quantity+1)
  }
  return (
    <div>
        <button onClick={adoptPet}>Adopt a Pet</button>
        <h3>Adopted today: {quantity}</h3>
    </div>
  )
}
