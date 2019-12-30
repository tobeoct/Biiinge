import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SideNav } from './components/Navigation/SideNav';
import {withContainer} from './components/common/Containers';
function App() {
  const SideBar = withContainer(
    SideNav
  );
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
      {SideBar}
    </React.Fragment>
  );
}

export default App;
