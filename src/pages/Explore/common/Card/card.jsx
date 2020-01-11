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
        "height","",require(`../../../../assets/images/${pload.imageUrl}`),"400px"
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
        <div style={{position:"relative"}}>
        <HalfImage></HalfImage>
        <div className="" style={{position:"absolute",width:"100%", bottom:"10px", paddingLeft:"5%",paddingRight:"5%",paddingTop:"5%", zIndex:"4"}}>
         
            <h3 style={{color:"white"}}>Jeopardy - Today</h3>
            <div className="d-inline-block">
              <p>7PM on Syndication</p>
              </div>

          </div>
     
        </div>
      
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
       <div style={{position:"relative"}}>
        <SmallImage></SmallImage>
        <div className="" style={{position:"absolute", top:"10px",right:"20px", paddingLeft:"5px",paddingRight:"5px", zIndex:"4"}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",width:"38px",height:"4px",borderRadius:"5px", zIndex:"2",background:"#409DE0"}}></div>
            <div style={{position:"absolute",width:"40px",height:"4px",borderRadius:"5px", zIndex:"1",background:"#FFFFFF60"}}></div>
            <p style={{color:"#409DE0", fontSize:"9px", transform:"translateY(5px)"}}>100%</p>
          </div>
          </div>
       
        <div className="" style={{position:"absolute",width:"100%", bottom:"10px", paddingLeft:"5px",paddingRight:"5px", zIndex:"4"}}>
          <div style={{display:"inline-block",width:"50%"}}>
            <button style={{background:"transparent",padding:"3px",borderRadius:"2px",fontSize:"10px", border:"1px solid #c4c4c4",color:"white"}}>PG-13</button>
          </div>
          <div  style={{display:"inline-block",textAlign:"right",color:"white", width:"45%"}}>
          <div style={{display:"inline-block",width:"10px"}}><i className="fa fa-heart" ></i></div>
            <div style={{display:"inline-block",width:"10px", marginLeft:"20%"}}><i className="fa fa-plus" ></i></div>
          </div>
        </div>
       </div>
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
     return <div className="biiinge-sheared-card" style={{position:"relative"}}>
       <img src={require(`../../../../assets/images/${pload.imageUrl}`)} className="biiinge-sheared-card__image-right"/>
  
       </div>
    }
    else if(cardType==="sheared-active"){
      return <div className="biiinge-sheared-card" >
        <img src={require(`../../../../assets/images/${pload.imageUrl}`)} className="biiinge-sheared-card-active"/>
        <div className="" style={{position:"absolute", top:"10px",right:"20px", paddingLeft:"5px",paddingRight:"5px", zIndex:"4"}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",width:"38px",height:"4px",borderRadius:"5px", zIndex:"2",background:"#409DE0"}}></div>
            <div style={{position:"absolute",width:"40px",height:"4px",borderRadius:"5px", zIndex:"1",background:"#FFFFFF60"}}></div>
            <p style={{color:"#409DE0", fontSize:"9px", transform:"translateY(5px)"}}>100%</p>
          </div>
          </div>
       
        <div className="" style={{position:"absolute",width:"100%", top:"10px", paddingLeft:"5%",paddingRight:"5%",paddingTop:"5%", zIndex:"4"}}>
          <div style={{display:"inline-block",width:"50%"}}>
            <h4 style={{color:"white"}}>Euphoria</h4>
            <div style={{display:"inline-block",verticalAlign:"middle",width:"12px",height:"12px",borderRadius:"16px", background:"#c4c4c4", marginRight:"5px"}}></div><p style={{display:"inline-block",verticalAlign:"middle"}}><span style={{marginRight:"10px"}}>S01 E14</span><span></span>    
            <div className="d-inline-block d-inline-block-no-margin">
          <div className="item"><SVG vector={star} width={15} height={15} ></SVG></div><div className="item"><RatingsText></RatingsText></div>
          </div> </p>

          </div>
          
        </div>
        </div>
    }
    else{
    return <div className="biiinge-card">
      <div style={{position:"relative"}}>
        <Image></Image>
        <div className="" style={{position:"absolute", top:"10px",right:"20px", paddingLeft:"5px",paddingRight:"5px", zIndex:"4"}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",width:"38px",height:"4px",borderRadius:"5px", zIndex:"2",background:"#409DE0"}}></div>
            <div style={{position:"absolute",width:"40px",height:"4px",borderRadius:"5px", zIndex:"1",background:"#FFFFFF60"}}></div>
            <p style={{color:"#409DE0", fontSize:"9px", transform:"translateY(5px)"}}>100%</p>
          </div>
          </div>
        <div className="" style={{position:"absolute",width:"100%", bottom:"10px", paddingLeft:"5px",paddingRight:"5px", zIndex:"4"}}>
          <div style={{display:"inline-block",width:"50%"}}>
            <button style={{background:"transparent",padding:"3px",borderRadius:"2px",fontSize:"10px", border:"1px solid #c4c4c4",color:"white"}}>PG-13</button>
          </div>
          <div  style={{display:"inline-block",textAlign:"right",color:"white", width:"45%"}}>
          <div style={{display:"inline-block",width:"10px"}}><i className="fa fa-heart" ></i></div>
            <div style={{display:"inline-block",width:"10px", marginLeft:"20%"}}><i className="fa fa-plus" ></i></div>
          </div>
        </div>
        </div>
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
        <div className="d-inline-block d-inline-block-no-margin">
          <div className="item"><SVG vector={star} width={15} height={15} ></SVG></div><div className="item"><RatingsText></RatingsText></div>
          </div>
          </div>
    </div>
}
}