import React from 'react';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Spinner } from '../../components/common/Spinner';
export const Video=()=>{
    return <React.Fragment>
        {/* <Spinner></Spinner> */}
        <Section1></Section1><Section2></Section2></React.Fragment>
}