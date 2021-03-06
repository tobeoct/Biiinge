import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import {withContainer} from './components/common/Containers';
import { Explore } from './pages/Explore';
import { PopupBar } from './components/common/PopUpBars';
import { SideNav } from './components/Navigation/SideNav';
import { ThemeProvider } from './contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from './variables/payloads';
import { Video } from './pages/Title';
import { SearchBar } from './components/common/SearchBar';
import { Login } from './pages/User/Login';
import { SignUp } from './pages/User/SignUp';
import { Landing } from './pages/Landing';
import { Logo } from './components/common/Logo';
import { BackgroundVideo } from './components/VideoPlayer/mini';
import { store } from './store';
 const App=() =>{
  var [initialState,setInitialState]=useState({display:false});
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="xs";
  obj.id="biiinge-sidenav__container";
  obj.className="";
  obj.isSection= false;
  obj.height=undefined;
  
  const handleSetDisplay=()=>{
    console.log("Setting Display");
    setInitialState({display:!initialState.display});
     }
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
    
    <Router>

      <Provider store={store}>
      <ThemeProvider value={{show:initialState.display, setDisplay:handleSetDisplay}}>
        <div className="pages">
       <Logo></Logo>
      <SearchBar></SearchBar>
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/title' component={Video} />
      </Switch>
      <PopupBar></PopupBar>
      <BackgroundVideo></BackgroundVideo>
      </div>
      </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
