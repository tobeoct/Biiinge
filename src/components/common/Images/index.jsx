import { Screen } from ".././Containers/screen"
import React, { Component } from 'react';
import { Image } from "./image";
export const withSettings =(type,className,picture)=>{
  // type,height,
   
return class extends React.Component {
    

    render() {
      // const { extraProp, ...passThroughProps } = this.props;
      // const injectedProp = [];//this.state.data;
      return <Screen type={type} className={className}><Image type={type} picture={picture}></Image></Screen>;
    }
}
}