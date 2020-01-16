import React from 'react';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Spinner } from '../../components/common/Spinner';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
import { Logo } from '../../components/common/Logo';
import { Button } from '../../components/common/Buttons';
export const Landing=()=>{
    return <React.Fragment>
        {/* <Spinner></Spinner> */}
       {/* <div className <Logo></Logo> */}
       <div className="landing-actions" style={{display:"flex", alignItems:"space-between", position:"fixed",top:"2%",right:0,zIndex:9}}>
           <Button text={"Sign Up"} type={"accent"} url={"signup"}></Button>
           <Button text={"Login"} url={"login"}></Button>
       </div>
        <Section1></Section1><Section2></Section2><Section3></Section3><Section4></Section4><Section5></Section5><Section6></Section6></React.Fragment>
}