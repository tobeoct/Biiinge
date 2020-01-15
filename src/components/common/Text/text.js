import React from 'react';
export const Text =({children, hasMargin})=>{
    if(hasMargin)
    {
    return <div style={{margin:"10px 0px"}}>{children}</div>
    }else{
return  <React.Fragment >{children}</React.Fragment>
    }
}