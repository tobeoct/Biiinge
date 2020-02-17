import {GET_MOVIE,GET_MOVIES,ADD_MOVIE} from './types';
/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action creators
 */
export function getMovies() {
  return { type: GET_MOVIES }
}
export function getMovie(index) {
  return { type: GET_MOVIE,index }
}
export function addMovie(movie) {
  return { type: ADD_MOVIE, movie }
}