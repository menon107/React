import React, { useState, useEffect } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import SearchBar from './components/SearchBar'
import PokemonList from './components/PokemonList'
import './App.css'

interface Pokemon {
  name: string
  url: string
}

interface PokemonDetails {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        setPokemonList(data.results)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemon()
  }, [])

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await fetch(pokemon.url)
          return await response.json()
        })
      )
      setPokemonDetails(details)
    }

    if (pokemonList.length > 0) {
      fetchPokemonDetails()
    }
  }, [pokemonList])

  const filteredPokemon = pokemonDetails.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Pokemon App</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PokemonList pokemonList={filteredPokemon} />
      </div>
    </div>
  )
}

export default App