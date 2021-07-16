import React from "react";
import { GenresContext } from '../Contenxt/GenresContext'
import { MovieCard } from "./MovieCard";
import { Header } from './Header';
import '../styles/content.scss';

export function Content() {
  const { movies  } = React.useContext(GenresContext)
  return (
      <div className="container">
        <Header />
        <main>
          <div className="movies-list">
            {movies && movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}