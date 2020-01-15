import React, { useEffect, useContext, useState } from 'react';
import {withSettings} from '../../../components/common/Images';
import bg from '../../../assets/images/login-bg.jpg';
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
    <div className="user-section1__actions">
      <p>Already have an Account?<span className="color-accent" style={{marginLeft:"5px"}}><u><Link to={'/'} >Login</Link></u></span></p>
      
    </div>
    </div>
</div>
</React.Fragment>
}
