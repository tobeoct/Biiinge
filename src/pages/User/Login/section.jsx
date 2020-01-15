import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import bg from '../../../assets/images/login-bg.jpg';
import popup from '../../../assets/images/popup.png';
import {Button} from '../../../components/common/Buttons';
import '../user.scss';
import { Link } from 'react-router-dom';
export const SectionDetails=()=>{


  const Image = withSettings(
    "no-height","user-section1__background",bg,undefined,"login"
  );
  
    return <React.Fragment >
        <div className="user-section1__center-piece"> 
    <Image></Image>
    <div className=" user-section1__popup__container">
    <div className="user-section1__popup__details">
      
        <h2 className="user-section1__title">Welcome Back !</h2>
  <div className="row user-section1__input">
<label>Username</label>
<input type="text"/>
</div>
<div className="row user-section1__input">

<label>Password</label>
<input type="text"/>
</div>
<div style={{margin:"20px auto"}}>
<Button text={"Sign In"} url={"explore"}></Button></div>
    </div>
    <div className="user-section1__actions">
      <div style={{position:"relative", width:"100%"}}>
      <p>Create an Account.<span className="color-accent" style={{marginLeft:"5px"}}><u><Link to={'/signup'} >Sign Up</Link></u></span></p>
      <p><u>Forgot Password?</u></p>
      </div>
    </div>
    </div>
</div>
</React.Fragment>
}
