import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavMenu from './NavMenu';

export const menuItems = [
   { 'id':1, 'label':'UserCorp', 'link': '/usercorp'},
   { 'id':2, 'label':'Tree', 'link': '/tree'},
   { 'id':3, 'label':'GetLubrificantas', 'link': '/lubrificants'},
   { 'id':4, 'label':'InfoAtivos', 'link': '/infoativos'},
]

function ApiServices(){
  return (
    <div>
        <NavMenu menuItems ={menuItems}/>
    </div>
  )
}


export default ApiServices;