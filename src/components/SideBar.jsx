import React from 'react';
import { GenresContext } from '../Contenxt/GenresContext'
import { Button } from './Button';
import '../styles/sidebar.scss';


export function SideBar() {
  const { genres , setSelectedGenreId , selectedGenreId } = React.useContext(GenresContext)

  function handleClickButton(id) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          { genres && genres.map(genre => (
            <Button
              key={genre.id}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>

  )
}