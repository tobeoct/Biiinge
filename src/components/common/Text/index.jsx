import { Screen } from ".././Containers/screen"
import React, { Component, useState, useEffect } from 'react';
import {Text} from "./text";
export const withFormatting =(text,type,className,hasMargin)=>{
  // type,height,
 
return class extends React.Component {

    constructor(props) {
        super(props);
    
      }
      
    render() {
      // const { extraProp, ...passThroughProps } = this.props;
      // const injectedProp = [];//this.state.data;
      
      if(type==="title")
      {
       
      return <Text text={text} className={className} hasMargin={hasMargin}><h4 className={className}>{text}</h4></Text>;
      }
      
      else if(type==="large-title")
      {
       
      return <Text text={text} className={className} hasMargin={hasMargin}><h1 className={className}>{text}</h1></Text>;
      }
      else if(type==="small-title")
      {
        return <Text text={text} className={className} hasMargin={hasMargin}><p className={className} style={{fontWeight:"500"}}>{text}</p></Text>;
      }
     else
      {
        return <Text text={text} className={className}  hasMargin={hasMargin}><p className={className}>{text}</p></Text>;
      }
    }
}
}