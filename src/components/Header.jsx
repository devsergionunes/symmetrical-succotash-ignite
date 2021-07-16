import React from "react";
import { GenresContext } from '../Contenxt/GenresContext'

export function Header() {
  const { selectedGenre  } = React.useContext(GenresContext)
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre && selectedGenre.title}</span></span>
    </header>
  )
}
