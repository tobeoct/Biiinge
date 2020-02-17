import {
    ADD_MOVIE,
    GET_MOVIES,
    GET_MOVIE
  } from '../actions/types';
  let initialState ={
    movies:[{
        id:1,
        title:"Marvel Avengers",
        featureImage:"",
        imageUrl:"",
        video:1,
        likes:"5",
        ratings:"8.5",
        date:"2019",
        director:"Micheal Bay",
        starring:"Robert Downey Jr",
        genre:["Action","Adventure"],
        isFavourite:true,
        upNext:true
    }],
    videos:[],
    tvshows:[],
    kids:[],
    favourites:[{id:2},{id:3}],
    justAired:[],
    playlist:[],
    friends:[
        {id:1,
        movies:[1,2,3,4]
        }
    ]
}
  function movies(state = [], action) {
    switch (action.type) {
      case ADD_MOVIE:
        return [
          ...state,
          {
              ...action.movie
          }
        ]
      case GET_MOVIE:
        return state.map((movie, index) => {
          if (index === action.index) {
            return Object.assign({}, movie);
          }
          return movie;
        })
        
          default:
            return state
    }
  }
  function movieReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_MOVIE:
        return Object.assign({}, state, {
            movies: movies(state.movies, action)
        })
      case GET_MOVIE:
        return Object.assign({}, state, {
          movies: movies(state.movies, action)
        })
      case GET_MOVIES:
          console.log(state);
        return Object.assign({}, state, {
          movies:state.movies
        })
      default:
        return state
    }
  }

  export default movieReducer;