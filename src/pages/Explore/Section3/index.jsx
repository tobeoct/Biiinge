import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const Section3=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="explore-section3__container";
  obj.className="";
  obj.isSection= true;
  obj.height="auto";
    const Section = withContainer(
   SectionDetails,obj
      );
    return <Section type={"rounded"}></Section>
}