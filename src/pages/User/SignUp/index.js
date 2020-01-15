import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const SignUp=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="user-section1__container";
  obj.className="";
  obj.isSection= true;
  obj.height="50vh";
    const Section = withContainer(
        SectionDetails,obj
      );
    return <Section ></Section>
}