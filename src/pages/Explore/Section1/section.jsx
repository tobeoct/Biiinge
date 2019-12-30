import React from 'react';

import picture from '../../../assets/images/section1-bg.png';
import {withSettings} from '../../../components/common/Images';
import { ThumbnailDescription } from '../../../components/Thumbnail/Description/Index';
import './explore.scss';
export const SectionDetails=()=>{
    const Image = withSettings(
        "","explore-section1__image",picture
      );
    return <React.Fragment >
    <Image></Image>
    <ThumbnailDescription></ThumbnailDescription>
</React.Fragment>
}