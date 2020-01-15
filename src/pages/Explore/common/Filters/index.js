import React, {useState,useEffect} from 'react';
import { Button } from '../../../../components/common/Buttons';
import ScrollAnimation from 'react-animate-on-scroll';
export const Filters=({style})=>{
    let [myStyle,setMystyle] = useState(style);
    useEffect(()=>{
        if(style===undefined)
        {
            setMystyle({});
        }else{
            setMystyle(style);
        }
    },[style]) 
   
    // return  <ScrollAnimation animateIn="fadeIn" animateOut="zoomOut" isVisible={true} offset={80}>
       return <div className="explore-filter__container scrolling-wrapper" style={myStyle}>
           <div className="scrolling-wrapper__swiper"><span>Swipe Left >></span></div>
          <Button type={"rounded"} text={"Action"} cName={"explore-filter__active"}></Button>
        <Button type={"rounded"} text={"Adventure"}></Button>
        <Button type={"rounded"} text={"Romance"}></Button>
        <Button type={"rounded"} text={"Crime"} cName={"explore-filter__active"}></Button>
        <Button type={"rounded"} text={"Drama"}></Button>
        <Button type={"rounded"} text={"Sci Fi"}></Button>
        <Button type={"rounded"} text={"Animation"}></Button>
        <Button type={"rounded"} text={"Documentary"}></Button>

    </div>
    // </ScrollAnimation>
}