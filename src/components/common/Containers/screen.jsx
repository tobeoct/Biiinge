export const Screen=(props)=>
{
    let style={
        width:"60px",
        height:"100vh",
        background:"#111111",
        opacity:"0.8",
        position:"fixed",
        top:0,
        bottom:0
    };
    return <div style={style} >
        {props.children}
    </div >
}