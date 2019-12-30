import React from  'react';
import background from '../../../assets/images/popup-background.png';
import vrHeadSet from '../../../assets/images/vr-headset.png';
import './popup-bar.scss';
export const PopupBar =()=>{
    return <div id="biiinge-popupbar" >
        <img src={background}/>
        <div style={{position:"absolute", textAlign:"center",top:"15%"}}>
            <div style={{width:"113.3px", margin:"auto"}}>
            <img src={vrHeadSet}/>
            </div>
            <h4><b>Biiinge VR HeadGear</b></h4>
            <h6>Connected</h6>
        </div>
    </div>
}