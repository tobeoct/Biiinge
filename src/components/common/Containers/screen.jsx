import React, { useState, useEffect } from 'react';
export const Screen=({children,type, id,className,isSection,height,padding})=>
{
    if(height===undefined)
    {
        height="100vh";
    }
    if(padding===undefined)
    {
        padding = "auto";
    }
    const [style,setStyle] =useState({
        width:isSection?"100vw":"100%",
        minHeight:height,
       
        top:0,
        bottom:0,
        position:"relative",
        paddingBottom:padding
    });
  const [myHeight,setMyHeight]=useState(height)
    useEffect(()=>{
        setMyHeight(height);
        if(type==="xs"){
        setStyle({
            width:"60px",
            minHeight:myHeight,
           
            opacity:"0.8",
            zIndex:5,
            position:"fixed",
            top:0,
            bottom:0,
            paddingBottom:padding
        });
        }
        if(type==="no-height" ){
            setStyle({
                width:"100%",
                height:"100%",
                position:"relative",
                paddingBottom:padding
            });
            }
            if( type==="height"){
                setStyle({
                    width:"100%",
                    height:myHeight,
                    position:"relative",
                    paddingBottom:padding
                });
                }
    
    },[type,height]);
    if(isSection){
    return <section style={style} id={id} className={className}>
        {children}
    </section >
    }else{
        return <div style={style} id={id} className={className}>
        {children}
    </div >
    }
}