import React from 'react';
import logo from '../../../assets/icons/Logo.png'
import { Link } from 'react-router-dom';
export const Logo =()=>{
    const style= [{
       objectFit:"contain",
       width:"100%"
    },{
        height:"auto",
        width:"30px",
        margin:"10px auto"
     }];
    return <Link to={"/"}><div  style={style[1]} id="biinge-logo__container">
        <img src={logo} style={style[0]}/>
    </div></Link>
}