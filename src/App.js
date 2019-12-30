import React from 'react';
import './App.css';
import {withContainer} from './components/common/Containers';
import { Explore } from './pages/Explore';
import { PopupBar } from './components/common/PopUpBars';
import { SideNav } from './components/Navigation/SideNav';
function App() {
  const SideBar = withContainer(
    SideNav,"xs","biiinge-sidenav__container"
  );
  // const ExplorePage = withContainer(
  //   Explore
  // );
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
      <SideBar></SideBar>
      <Explore></Explore>
      <PopupBar></PopupBar>
    </React.Fragment>
  );
}

export default App;
