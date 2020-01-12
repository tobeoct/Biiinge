import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import eyeCatcher from '../../../assets/images/eye-catcher-biiinge.svg';
import '../explore.scss';
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const SectionDetails=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  
 let [myOpacity,setMyOpacity]=useState(1);
  let {display}=useContext(ThemeContext);

  useEffect(()=>{
    if(display===true){
      setMyOpacity(1);    }else{
        setMyOpacity(0);
      }
  },[display])

  const Image = withSettings(
    "no-height","login-section1__background",eyeCatcher
  );
  
    return <React.Fragment >
    <Image></Image>

</React.Fragment>
}
