import React , {useState} from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { useEffect } from 'react';
export const Section5=({movies})=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="";
  obj.id="explore-section5__container";
  obj.className="";
  obj.isSection= true;
  obj.height=undefined;
    const Section = withContainer(
        SectionDetails,obj
      );
      useEffect(()=>{
        console.log(movies);
      });
    return <Section type={"rounded"}></Section>
}