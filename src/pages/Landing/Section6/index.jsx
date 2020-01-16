import React, { useState }  from 'react';
import {withContainer} from '../../../components/common/Containers';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { SectionDetails } from './section';
export const Section6=()=>{
      let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
      let obj = withContainerPayload;
      obj.type="";
      obj.id="landing-section6__container";
      obj.className="";
      obj.isSection= true;
      obj.height=undefined;
      const Section = withContainer(SectionDetails,obj);
     
    return <Section></Section>
}
