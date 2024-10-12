import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface PokemonCardProps {
  pokemon: {
    id: number
    name: string
    sprites: {
      front_default: string
    }
  }
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
  <Card className="w-full max-w-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-primary-foreground hover:bg-secondary-foreground group">
    <CardHeader>
      <CardTitle className="text-lg capitalize text-primary group-hover:text-primary-foreground">{pokemon.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex justify-center">
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="w-32 h-32 transition-transform duration-300 ease-in-out transform group-hover:rotate-6" 
      />
    </CardContent>
  </Card>
)

export default PokemonCard