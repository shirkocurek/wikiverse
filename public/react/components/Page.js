import React from 'react';
import { useState, useEffect } from 'react';
import apiURL from '../api';

export const Page = (props) => {

  const [article, setArticle] = useState([]);
  const [isAddingArticle, setAddingArticle] = useState(false)

  async function fetchArticle(){
		const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
		const articleData = await response.json();
    console.log("dtat", articleData)
		setArticle(articleData);
		
	}

	useEffect(() => {
		fetchArticle();
	}, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setCreatures([...article,
  { isAddingArticle }]);
    setArticle([]);
    setAddingArticle(false);
  }

  return <>
    <br/>
    <h3 className='titlestyle' onClick = {fetchArticle}>
    {props.page.title}</h3>
    <h4>Author: </h4>
    <h5>Content: {props.page.content}</h5>
    <h6>Date: {props.page.createdAt}</h6>
    {/*<h7>Tags: {props.page.tags}</h7>*/}

   {/*} <button onClick={()=>{
      setArticle(null)
      fetchArticle();

    }
    } >Back to Wiki List</button>

    <button onClick = {() => setAddingArticle(article)} className = { article.isAdiingArticle ? 
    <form onSubmit = {handleSubmit} className="step" aria-label="form" >
    <h4>Add Title</h4>
    <input type="text" placeholder="Title" aria-label="name" onChange={ (ev) => setArticle(ev.target.value)}/>
    <input type="text" placeholder="Article Content" aria-label="name" onChange={ (ev) => setArticle(ev.target.value)}/>
    <input type="text" placeholder="Author Name" aria-label="name" onChange={ (ev) => setArticle(ev.target.value)}/>
    <input type="text" placeholder="Author Email" aria-label="name" onChange={ (ev) => setArticle(ev.target.value)}/>
    <input type="text" placeholder="Tags" aria-label="name" onChange={ (ev) => setAritcle(ev.target.value)}/>

    <button type="submit">Creat Page</button></form>
    : ''}></button>*/}
  
  </>
} 
	