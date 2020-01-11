import React, {useState,useEffect} from 'react';
import { Button } from '../../../../components/common/Buttons';
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
   
    return <div className="explore-filter__container scrolling-wrapper" style={myStyle}>
        <Button type={"rounded"} text={"Action"} cName={"explore-filter__active"}></Button>
        <Button type={"rounded"} text={"Adventure"}></Button>
        <Button type={"rounded"} text={"Romance"}></Button>
        <Button type={"rounded"} text={"Crime"} cName={"explore-filter__active"}></Button>
        <Button type={"rounded"} text={"Drama"}></Button>
        <Button type={"rounded"} text={"Sci Fi"}></Button>
        <Button type={"rounded"} text={"Animation"}></Button>
        <Button type={"rounded"} text={"Documentary"}></Button>

    </div>
}