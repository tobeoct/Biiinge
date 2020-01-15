import { Screen } from "./screen"
import React from 'react';

export const withContainer =(WrappedComponent,payload)=>{
 let {type,id,className, isSection,height,padding} = payload;
return class extends React.Component {
    

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