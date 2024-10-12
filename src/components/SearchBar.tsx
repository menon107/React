import React from 'react'
import { Input } from "./ui/input"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <Input
    type="text"
    placeholder="Search Pokemon"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="mb-6 max-w-md mx-auto"
  />
)

export default SearchBar