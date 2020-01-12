import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import React, { useState } from 'react';

import {withContainer} from '../../components/common/Containers';
import { Section8 } from "./Section8";
import { SideNav } from "../../components/Navigation/SideNav";
import { WITHCONTAINERPAYLOAD } from "../../variables/payloads";
export const Explore=()=>{
    let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="xs";
  obj.id="biiinge-sidenav__container";
  obj.className="";
  obj.isSection= false;
  obj.height=undefined;
  
    const SideBar = withContainer(
        SideNav,obj
      );
    
    return<React.Fragment>
        
      <SideBar></SideBar>
    
         <Section1></Section1> 
    <Section2></Section2>
     <Section3></Section3> <Section4></Section4><Section5></Section5><Section6></Section6><Section7></Section7><Section8></Section8></React.Fragment> 
}