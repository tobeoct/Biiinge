import React, { useEffect, useContext, useState } from 'react';
import {withSettings} from '../../components/common/Images';
import bg from '../../assets/images/login-bg.jpg';
import popup from '../../assets/images/popup.png';
import {Button} from '../../components/common/Buttons';
import './signup.scss';
import { Link } from 'react-router-dom';
export const SectionDetails=()=>{
  const Image = withSettings(
    "no-height","signup-section1__background",bg,undefined,"login"
  );
  
    return <React.Fragment >
        <div id="signup-section1__center-piece"> 
    <Image></Image>
    <div className="signup-section1__details__container">
    {/* <img src={popup}/> */}
    <div className="signup-section1__details">
      <div className="row">
       <div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>First Name</label></div>
<input type="text" placeholder="Optional"/></div>
<div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Last Name</label>
</div>
<input type="text"  placeholder="Optional"/>
</div>
</div>
<div className="row">
       <div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Username</label></div>
<input type="text" /></div>
<div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>D.O.B</label>
</div>
<input type="date"  />
</div>
</div>
<div className="row">
       <div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Password</label></div>
<input type="password"  autocomplete="new-password" /></div>
<div className="col-md-6"> <div style={{textAlign:"left", marginTop:"30px"}}>
<label>Confirm Password</label>
</div>
<input type="password"  />
</div>
</div>

<div style={{margin:"20px auto"}}>
<Button text={"Sign Up"} url={"explore"}></Button></div>
    </div>
    <div style={{position:"absolute", bottom:"-30px"}} className="signup-section1__actions">
      <p style={{float:"left"}}>Already have an Account?<span className="color-accent" style={{marginLeft:"5px"}}><u><Link to={'/'} >Login</Link></u></span></p>
      
    </div>
    </div>
</div>
</React.Fragment>
}
