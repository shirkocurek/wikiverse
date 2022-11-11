import React from 'react';
import { Page } from './Page';
import apiURL from '../api';
import { useState } from 'react';
import { Footer } from "./Footer";

export const PagesList = ({pages, setPages}) => {
	const [article, setArticle] = useState('');

	const getArticle = async(slug) =>{
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const pagesData = await response.json();
			setArticle(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}

	}

	const goBack = async() => {
		try {
			const response = await fetch(`${apiURL}/wiki/`);
			const allData = await response.json();
			setPages(allData);
			setArticle();
		} catch (err) {
			console.log("Oh no an error! ", err)
		}

	}
   
	const deleteArticle = async (slug)=> {
		const response = await fetch(`${apiURL}/wiki/${slug}`, {
			method : "DELETE"
			
		});
		goBack();
		const data = await response.json();
	}








	return <>
		{ article ?
		<div>
			<div>
			<br/>
			<h2 className='info2'>Title:</h2>
			<h2 className='info1'>{article.title}</h2>
			<br/>
            <h2 className='info2'>Author:</h2>
			<h3 className='info1'>{article.author.name}</h3>
			<br/>
			<h2 className='info2'>Content:</h2>
			<h4 className='info1'>{article.content}</h4>
			<br/>
			<h2 className='info2'>Tags:</h2>
			<h5 className='info1'>{article.tags.map((tag) =>{return<div>{tag.name}<br/></div>} )}</h5>
			<br/>
			<h2 className='info2'>Date:</h2>
			<h6 className='info1'>{article.createdAt}</h6>
			<br/>
			</div>
			<button className='buttonBack' onClick={()=>{goBack()}}>Back to Wikilist</button>
			<br/>
			<br/>
			<button className='buttonDelete' onClick={()=>{deleteArticle(article.slug)}}>Delete</button>
        </div>
		:
			pages.map((page, idx) => {
				return <Page page={page} key={idx} clickThis = {getArticle} />
				
			})
            
		}
		
	</>
} 
