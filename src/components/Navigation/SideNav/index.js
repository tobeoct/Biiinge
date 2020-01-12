import React from 'react';
import { Logo } from '../../common/Logo';
import playlist from '../../../assets/icons/playlist.png';
import movies from '../../../assets/icons/movies.png';
import tvShow from '../../../assets/icons/tv-show.png';
import watchLater from '../../../assets/icons/watch-later.png';
import friends from '../../../assets/icons/friends.png';
import favourites from '../../../assets/icons/favourites.png';
import { NavItem } from './nav-item';
import './side-nav.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from 'react-animated-css';
export const SideNav=()=>{
    const items = [{src:playlist,text:"Playlist"},{src:movies,text:"Movies"},{src:tvShow,text:"TV Shows"},{src:watchLater,text:"Watch Later"},{src:friends,text:"Friends"},{src:favourites,
    text:"Favourites"}];
return <Animated animationIn="fadeIn" animationInDuration="2000" animationInDelay="500" animationOut="fadeOut" isVisible={true}>
<React.Fragment>
    <div id="biiinge-sidenav__logo" ><Logo></Logo></div>
   
    {items.map(item => {
        return  <div className="biiinge-sidenav__navitem" key={item.text}><NavItem src={item.src} text={item.text}></NavItem>
        </div>
    })}
</React.Fragment>
</Animated>
}