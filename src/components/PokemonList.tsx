import React from 'react'
import PokemonCard from './PokemonCard'

interface PokemonListProps {
  pokemonList: Array<{
    id: number
    name: string
    sprites: {
      front_default: string
    }
  }>
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {pokemonList.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
)

export default PokemonList