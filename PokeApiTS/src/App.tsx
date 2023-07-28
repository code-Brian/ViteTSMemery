import {useEffect, useState} from 'react'
import {PokemonList} from './components/PokemonList'
import axios from 'axios'

function App() {
const [pokemonList, setPokemonList] = useState([])
useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0').then(response => setPokemonList(response.data.results))
},[])

  return (
    <>
      <PokemonList pokemon={pokemonList}/>
    </>
  )
}

export default App
