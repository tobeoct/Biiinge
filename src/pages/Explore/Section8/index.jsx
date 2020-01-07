import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const Section8=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="explore-section8__container";
  obj.className="";
  obj.isSection= true;
  obj.height=undefined;
    const Section = withContainer(
        SectionDetails,obj
      );
    return <Section type={"rounded"}></Section>
}