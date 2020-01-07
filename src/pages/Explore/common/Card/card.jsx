import React, { useState, useEffect } from 'react';
import {withSettings} from '../../../../components/common/Images';
import {withFormatting} from '../../../../components/common/Text';
import marvel from '../../../../assets/images/marvel.png';
import { SVG } from '../../../../components/common/Images/svg';
import star from '../../../../assets/icons/star.svg';
import friends from '../../../../assets/icons/friends.svg';
import view from '../../../../assets/icons/view.svg';
export const Card=({payload,cardType,opacity,onMouseEnter})=>{
    const [pload,setPayload] = useState(payload);
    const [type,setType] = useState(cardType);
    let Image = withSettings(
        "height","biiinge-card__image",require(`../../../../assets/images/${pload.imageUrl}`),"320px"
      );
      let SmallImage = withSettings(
        "height","",require(`../../../../assets/images/${pload.imageUrl}`),"250px"
      );
      let AThirdImage = withSettings(
        "height","",require(`../../../../assets/images/${pload.imageUrl}`),"229px"
      );
      let HalfImage = withSettings(
        "no-height","",require(`../../../../assets/images/${pload.imageUrl}`)
      );
      let WideImage = withSettings(
        "height","biiinge-card__wideimage",require(`../../../../assets/images/${pload.imageUrl}`),"180px"
      );
      let TitleText = withFormatting(
        pload.title,"title","biiinge-card__title",true
      );
      let SmallTitleText = withFormatting(
        pload.title,"small-title","biiinge-card__title",true
      );
      let RatingsText = withFormatting(
        "8.5","","biiinge-card__ratings",false
      );
      let DateText = withFormatting(
        "2019","title","biiinge-card__date",false
      );
      const handleMouseEnter=(id)=>{
        // console.log(`Entered ${id}`);
        onMouseEnter();

      }
    useEffect(()=>{
        setPayload(payload);
        setType(cardType);

    },[payload,cardType]);
    if(cardType==="card-6")
    {
      return <div className="explore-section6__schedules__card" >
        {/* <img src={impact} style={{objectFit:"cover"}}/> */}
        <HalfImage></HalfImage>
        </div>
    }
    else if(cardType==="card-3")
    {
      return <div className="explore-section7__tvshows__card" >
        {/* <img src={impact} style={{objectFit:"cover"}}/> */}
        <AThirdImage></AThirdImage>
        </div>
    }
   else if(cardType==="card")
    {
      return  <div className="biiinge-card__movies" >
        {/* <img src={require(`../../../../assets/images/${pload.imageUrl}`)}  style={{objectFit:"cover"}}/> */}
        <SmallImage></SmallImage>
        <SmallTitleText></SmallTitleText>
        <div className="d-flex-spaced">
        <div className="item"><DateText></DateText></div>
        <div className="d-inline-block">
            <div className="item"><SVG vector={friends} width={15} height={15}  type="friends"></SVG></div>
            <div className="item"><small style={{opacity:"0.7"}}>538</small></div>
        </div>
        <div className="d-inline-block">
            <div className="item"><SVG vector={view} width={15} height={15}  type="view"></SVG></div>
            <div className="item"><small style={{opacity:"0.7"}}>538</small></div>
        </div>
        <div className="d-inline-block d-inline-block-no-margin"><div className="item"><SVG vector={star} width={15} height={15} ></SVG></div><div className="item"><RatingsText></RatingsText></div></div></div>
  
        </div>
    }
    else if(cardType==="rounded"){
        return <div className="biiinge-card biiinge-card-rounded" style={{marginRight:"30px"}} onMouseEnter={()=>handleMouseEnter(pload.id)}>
            
            <img src={require(`../../../../assets/images/${pload.imageUrl}`)} style={{borderRadius:"120px", width:"120px",objectFit:"cover", height:"120px", position:"relative", zIndex:"2", border:"2px solid #888888"}} />
            <div className="image__active" style={{opacity:opacity}}></div>
       
</div>
    }
    else if(cardType==="wide"){
      return  <div className="biiinge-card biiinge-card-wide" style={{marginRight:"30px"}} onMouseEnter={()=>handleMouseEnter(pload.id)}>
            {/* <div id="image" style={{background:}}>

            </div> */}
            {/* <img src={require(`../../../../assets/images/${pload.imageUrl}`)} style={{ width:"100%",objectFit:"cover", height:"180px", position:"relative", zIndex:"2"}} /> */}
            <WideImage></WideImage>
        
</div>
    }
    else if(cardType==="sheared-left"){
      return  <div className="biiinge-sheared-card"><img src={require(`../../../../assets/images/${pload.imageUrl}`)} className="biiinge-sheared-card__image-left"/></div>
    }
    else if(cardType==="sheared-right")
    {
     return <div className="biiinge-sheared-card"><img src={require(`../../../../assets/images/${pload.imageUrl}`)} className="biiinge-sheared-card__image-right"/></div>
    }
    else if(cardType==="sheared-active"){
      return <div className="biiinge-sheared-card" ><img src={require(`../../../../assets/images/${pload.imageUrl}`)} className="biiinge-sheared-card-active"/></div>
    }
    else{
    return <div className="biiinge-card">
        <Image></Image>
        <TitleText></TitleText>
        <div className="d-flex-spaced">
        <div className="item"><DateText></DateText></div>
        <div className="d-inline-block">
            <div className="item"><SVG vector={friends} width={15} height={15}  type="friends"></SVG></div>
            <div className="item"><small style={{opacity:"0.7"}}>538</small></div>
        </div>
        <div className="d-inline-block">
            <div className="item"><SVG vector={view} width={15} height={15}  type="view"></SVG></div>
            <div className="item"><small style={{opacity:"0.7"}}>538</small></div>
        </div>
        <div className="d-inline-block d-inline-block-no-margin"><div className="item"><SVG vector={star} width={15} height={15} ></SVG></div><div className="item"><RatingsText></RatingsText></div></div></div>
    </div>
}
}