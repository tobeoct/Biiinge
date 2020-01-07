import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const Section7=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="explore-section7__container";
  obj.className="";
  obj.isSection= true;
  obj.height=undefined;
    const Section = withContainer(
        SectionDetails,obj
      );
    return <Section type={"rounded"}></Section>
}