import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../components/common/Images';
import bg from '../../assets/images/login-bg.jpg';
import popup from '../../assets/images/popup.png';
import {Button} from '../../components/common/Buttons';
import './login.scss';
import { Link } from 'react-router-dom';
export const SectionDetails=()=>{


  const Image = withSettings(
    "no-height","login-section1__background",bg,undefined,"login"
  );
  
    return <React.Fragment >
        <div id="login-section1__center-piece"> 
    <Image></Image>
    <div className="login-section1__details__container">
    <img src={popup}/>
    <div className="login-section1__details">
        <h2>Welcome Back !</h2>
        <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Username</label></div>
<input type="text"/>
<div style={{textAlign:"left"}}>
<label>Password</label>
</div>
<input type="text"/>
<Button text={"Sign In"} url={"explore"}></Button>
    </div>
    <div style={{position:"relative", paddingLeft:"5%", paddingRight:"5%"}} className="login-section1__actions">
      <p style={{float:"left"}}>Create an Account.<span className="color-accent" style={{marginLeft:"5px"}}><u><Link to={'/signup'} >Sign Up</Link></u></span></p>
      <p style={{float:"right"}}>Forgot Password?</p>
    </div>
    </div>
</div>
</React.Fragment>
}
