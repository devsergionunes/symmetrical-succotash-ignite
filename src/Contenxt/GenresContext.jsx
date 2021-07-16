import React from "react";

import { api } from '../services/api';

export const GenresContext = React.createContext()

export function GenresContextProvider(props) {
  const [selectedGenreId, setSelectedGenreId] = React.useState(1);
  const [genres, setGenres] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState({});

  React.useEffect(() => {
    api.get('genres').then(response => {
        setGenres(response.data);
    });
  }, []);
  React.useEffect(() => {
    api.get(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
    
    api.get(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <GenresContext.Provider value={{
      genres,
      setGenres,
      selectedGenreId,
      setSelectedGenreId,
      movies,
      setMovies,
      selectedGenre,
      setSelectedGenre
    }}>
      {props.children}
    </GenresContext.Provider>
  )
}