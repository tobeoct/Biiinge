import React from 'react';
import logo from '../../../assets/icons/Logo.png'
export const Logo =()=>{
    const style= [{
       objectFit:"contain",
       width:"100%"
    },{
        height:"auto",
        width:"30px",
        margin:"10px auto"
     }];
    return <div  style={style[1]} id="biinge-logo__container">
        <img src={logo} style={style[0]}/>
    </div>
}