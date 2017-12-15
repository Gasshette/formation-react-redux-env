import fetch from 'isomorphic-fetch';

export const getMovies = () => fetch('https://facebook.github.io/react-native/movies.json')
  .then(
    response => response.json(),
    error => console.log('An error occured : ', error),
  );
