import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
// import { Spinner } from '../../../../components/common/Spinner';
export const Login=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="login-section1__container";
  obj.className="";
  obj.isSection= true;
  obj.height="100vh";
    const Section = withContainer(
        SectionDetails,obj
      );
    return <React.Fragment>
      {/* <Spinner></Spinner> */}
      <Section ></Section></React.Fragment> 
}