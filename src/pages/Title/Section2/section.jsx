import React, { useEffect,useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import marvel from '../../../assets/images/marvel.png';
import '../title.scss';
//  import data from "../../../datasource/movies.json";
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { withFormatting } from '../../../components/common/Text';
import { Button } from '../../../components/common/Buttons';
import { Header } from '../../Explore/common/Headers/header';
export const SectionDetails=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="no-height";
  obj.id="title-section2__container";
  obj.className="container";
  obj.isSection= false;
  obj.height=undefined;
  useEffect(()=>{
    // fetch('../../../datasource/movies.json').then(response => {
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    // });
  })
  const Image = withSettings(
    "height","title-section2__teaser",marvel,"300px"
  );
  const TitleText = withFormatting("Lord of The Rings \nThe Fellowship of the Rings","large-title","title_section2__title")
  // const CardsSection = withContainer(
  //   Cards,obj
  // );
    return <React.Fragment >
      {/* <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" isVisible={true}>
  
    </ScrollAnimation> */}
    
    <div className="container" style={{paddingTop:"5%"}}>
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-4">
          <Image></Image>
          <Button text="Add To Queue" cName="title-section2__button title-section2__button__stroke"></Button>
          
          <div className=" d-flex"> 
          <div className="title-section2__actions" >
          <Button text="Host A Friend" cName="title-section2__button title-section2__button__darktext"></Button>
          </div>
          <div className="title-section2__actions " >
          <Button text="I" cName="title-section2__button title-section2__button__stroke  title-section2__button__small"></Button>
          </div>
          </div>
          
        </div>
        <div className="col-md-9 col-sm-8 col-xs-8">
          <TitleText></TitleText>
          <div className="d-flex title-section2__critics__container" >

            <div  className="title-section2__critics" >
              <small>IMDB</small>
              <p><b>9.1/10</b></p>
            </div>
            <div className="title-section2__critics" >
              <small>Rotten Tomatoes</small>
              <p><b>91%</b></p>
            </div>
            <div className="title-section2__critics" >
              <small>MetaCritic</small>
              <p><b>92%</b></p>
            </div>
          </div>
       <div className="title-section2__time__container">
         <p>(2002) - 3hr 30mins </p>
       </div>
       <div className="d-flex title-section2__genre__container">
       <Button text="Adventure" cName="title-section2__genre__button" type="rounded"></Button>
       <Button text="Action" cName="title-section2__genre__button" type="rounded"></Button>
       </div>
       <div className="title-section2__description__container">
         <p>A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.</p>
       </div>
       <div className="title-section2__director__container">
         <span>Director </span>
         <span> Peter Jackson</span>
       </div>
       <div className="title-section2__starring__container">
         <span>Starring </span>
         
       </div>
      
        </div>
      </div>
      <Header text={"Friends Rating"} type="small"></Header>
    </div>
</React.Fragment>
}