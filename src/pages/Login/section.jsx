import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../components/common/Images';
import bg from '../../assets/images/login-bg.jpg';
import popup from '../../assets/images/popup.png';
import {Button} from '../../components/common/Buttons';
import './login.scss';
export const SectionDetails=()=>{


  const Image = withSettings(
    "no-height","login-section1__background",bg,undefined,"login"
  );
  
    return <React.Fragment >
        <div style={{position:"relative"}}> 
    <Image></Image>
    <div style={{position:"absolute",width:"35%",top:"7%",left:"31%", zIndex:5}}>
    <img src={popup}/>'
    <div  style={{position:"absolute",width:"80%",top:"13%",left:"10%", textAlign:"center"}}>
        <h2>Welcome Back !</h2>
        <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Username</label></div>
<input type="text"/>
<div style={{textAlign:"left"}}>
<label>Password</label></div>
<input type="text"/>
<Button text={"Sign In"} url={"explore"}></Button>
    </div>
    <div style={{position:"relative", paddingLeft:"5%", paddingRight:"5%"}}>
      <p style={{float:"left"}}>Create an Account.<span className="color-accent" style={{marginLeft:"5px"}}><u>Sign Up</u></span></p>
      <p style={{float:"right"}}>Forgot Password?</p>
    </div>
    </div>
</div>
</React.Fragment>
}
