import React, { useState, useEffect, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Card } from './card';
import ThemeContext from '../../../../contexts/theme-context';
export const Cards=({payload,type,opacity,cardType})=>
{
    var {setDisplay}=useContext(ThemeContext);
    const [load,setLoad] = useState(payload);
    let count=0;
    useEffect(()=>{
        setLoad(payload);
    },[payload])
const handleSetDisplay=()=>{
    // console.log("mouse entered");
//setDisplay();
}
if(payload!==undefined){
    if(cardType==="sheared"){
        return <ScrollAnimation animateIn="fadeIn" isVisible={true} offset={80}><React.Fragment><Card key={count++} payload={payload[0]} cardType={"sheared-left"} opacity={1} onMouseEnter={handleSetDisplay}></Card>
         <Card key={count++} payload={payload[1]} cardType={"sheared-active"} opacity={1} onMouseEnter={handleSetDisplay}></Card>
         <Card key={count++} payload={payload[2]} cardType={"sheared-right"} opacity={1} onMouseEnter={handleSetDisplay}></Card>
         </React.Fragment></ScrollAnimation>
    }else{
    return <React.Fragment>
        <ScrollAnimation animateIn="fadeIn" isVisible={true} offset={80}>
        {payload.map(data => {
      
    return  <Card key={count++} payload={data} cardType={type} opacity={1} onMouseEnter={handleSetDisplay} ></Card>
    
    })}
  </ScrollAnimation>  
  </React.Fragment>
    }
}

else{
    return<React.Fragment></React.Fragment>
}
}