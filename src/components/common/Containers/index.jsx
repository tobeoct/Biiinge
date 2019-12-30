import { Screen } from "./screen"
import React from 'react';

export const withContainer =(WrappedComponent,type,className, isSection=false)=>{
 
return class extends React.Component {
    constructor(props) {
      super(props);
    
    }


    render() {
      const { extraProp, ...passThroughProps } = this.props;
      const injectedProp = [];//this.state.data;
      return <Screen type={type} className={className} isSection={isSection}><WrappedComponent injectedProp={injectedProp}
       {...passThroughProps}></WrappedComponent></Screen>;
    }
}
}