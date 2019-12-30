import React from 'react';

export const NavItem=({src,text})=>
{
return <React.Fragment><img src={src}/><small>{text}</small></React.Fragment>
}
