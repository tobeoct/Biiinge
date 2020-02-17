import { createStore } from 'redux'
import reducer from './reducers/initialReducer';
let initialState ={
    movieReducer:[],
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

export const store = createStore(reducer,initialState);