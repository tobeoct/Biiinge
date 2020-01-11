import React, { useEffect, useState } from 'react';
export const Range =({value,className,step,min,max,onChange})=>{
    let numberOfBars = (max-min);
    let width = step * 10;
    let [items,setitems] = useState([]);
    let container = [];
   
    console.log(container);
    useEffect(()=>{
        for (let index = 0; index < numberOfBars; index++) {
            let height = Math.random()*10;
            let bg = "#333333";
            if(index<value){
                bg="#999999";
            }
            container.push(<div className="range-block" style={{ height:`10px`, background:bg}} onClick={()=>onChange()}></div>)
        }
        setitems(container);
    },[value,max])
    return <React.Fragment>
        {items.map(item=>{
            return item;
        })}
    </React.Fragment>
}