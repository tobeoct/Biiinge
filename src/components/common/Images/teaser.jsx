import React from 'react';
export const Teaser=({type,className,image})=>{

    return <div className={"explore-sections__teaser explore-sections__teaser__background "+className}>
        <img src={image}/>
    </div>
}