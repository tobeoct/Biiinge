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
    const [cName,setCName] = useState("explore-sections__container");
    const [style,setStyle] =useState({
        width:isSection?"100vw":"100%",
        minHeight:height,
    });
  const [myHeight,setMyHeight]=useState(height)
    useEffect(()=>{
        setMyHeight(height);
        setCName(cName+" "+className);
        if(type==="xs"){
            setCName(cName+" "+className+" explore-sections__xs");
        setStyle({
            width:"60px",
            minHeight:myHeight,
           
        });
        }
        if(type==="no-height" ){
            setCName(cName+" "+className+" explore-sections__no-height");
            setStyle({
                
                paddingBottom:padding
            });
            }
            if( type==="height"){
                setCName(cName+" "+className+" explore-sections__height");
                setStyle({
                    width:isSection?"100vw":"100%",
                    height:myHeight
                });
                }
    
    },[type,height]);
    if(isSection){
    return <section style={style} id={id} className={cName}>
        {children}
    </section >
    }else{
        return <div style={style} id={id} className={cName}>
        {children}
    </div >
    }
}