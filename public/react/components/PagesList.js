import React from 'react';
import { Page } from './Page';
import apiURL from '../api';
import { useState } from 'react';

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
		const data = await response.json();
	}








	return <>
		{ article ?
		<div>
			<h2>Title: {article.title}</h2>
			<h3>Author: {article.author.name}</h3>
			<h4>Content: {article.content}</h4>
			<h5>Tags: {article.tags.map((tag) =>{return<div>{tag.name}<br/></div>} )}</h5>
			<h6>Date: {article.createdAt}</h6>
			<button onClick={()=>{goBack()}}>Back to Wikilist</button>
			<button onClick={()=>{deleteArticle(article.slug)}}>Delete</button>
        </div>
		:
			pages.map((page, idx) => {
				return <Page page={page} key={idx} clickThis = {getArticle} />
			})

		}
	</>
} 
