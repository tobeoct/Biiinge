import React from 'react';
import { Animated } from 'react-animated-css';
export const SearchBar=()=>{
      return <div className="biiinge-searchbar__container"><Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}> 
<div className="biiinge-searchbar__input item"><input type="text" placeholder="Find your movies, TV shows, series and more..."/></div>
<div className="biiinge-searchbar__type item"><span><small>in Movies</small></span><span style={{paddingLeft:"5px"}}><small><i className="fa fa-caret-down"></i></small></span></div>
<div className="biiinge-searchbar__button item"><small><i className="fa fa-search"></i></small></div>
   </Animated>  </div>
}