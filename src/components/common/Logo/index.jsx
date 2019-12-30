import logo from '../../../assets/icons/Logo.png'
export const Logo =()=>{
    const style= [{
       objectFit:"cover",
       width:"100%"
    },{
        height:"30px",
        width:"30px"
     }];
    return <div  style={style[1]} id="biinge-logo__container">
        <img src={logo} style={style[0]}/>
    </div>
}