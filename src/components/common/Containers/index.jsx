import { Screen } from "./screen"
import React, { useState } from 'react';

export const withContainer =(WrappedComponent,payload)=>{
 let {type,id,className, isSection,height,padding} = payload;
return class extends React.Component {
    constructor(props) {
      super(props);
    
// console.log(type);
// console.log(id);
// console.log(className);
// console.log(isSection);
// console.log(height);
    }

    render() {
       const { extraProp, ...passThroughProps } = this.props;
      
      const injectedProp = this.props;
      return <Screen type={type} className={className} id={id} isSection={isSection} height={height} padding={padding}>
        <WrappedComponent injectedProp={injectedProp}
       {...passThroughProps}></WrappedComponent>
       </Screen>;
    }
}
}