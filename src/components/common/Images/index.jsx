import { Screen } from ".././Containers/screen"
import React from 'react';
import { Image } from "./image";
export const withSettings =(type,className,picture,height,overlayType)=>{
  // type,height,
   
return class extends React.Component {
    

    render() {
      // const { extraProp, ...passThroughProps } = this.props;
      // const injectedProp = [];//this.state.data;
      return <Screen type={type} className={className} height={height}><Image type={type} picture={picture} height={height} overlayType={overlayType}></Image></Screen>;
    }
}
}