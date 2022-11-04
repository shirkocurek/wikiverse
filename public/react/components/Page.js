import React from 'react';
import { useState } from 'react';


export const Page = (props) => {


  return <>
  
    <br/>
    <h3 className='titlestyle' onClick ={()=> {props.page.slug}}>
    {props.page.title}</h3>
    

  </>
} 
	