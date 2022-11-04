import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import e from 'cors';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isAddingArticle, setIsAddingArticle] = useState(false)
	const [title,setTitle] = useState('');
	const [content,setContent] = useState('');
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [tags,setTags] = useState('');

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    const handleSubmit = async (e) => {
		const response = await fetch(`${apiURL}/wiki`, {
			method : "POST",
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({
				title: title,
				contect: content,
				name: name,
				email: email,
				tags: tags

			})
		})
		{/*const data = await response.json();*/}
	}





	useEffect(() => {
		fetchPages();
	}, []);




	return (
		<main>	
		<div>
			<img scr= 'https://labs.openai.com/e/Bv6mKr9x0gw9HMe4MRkHXz47/original' alt= 'book in space'/>
		</div>	
      <h1 className='header1'>WikiVerse</h1>
	       {isAddingArticle ?
		   <div className='formdiv'>
			<form onSubmit={handleSubmit}>
				<h3>Add Article</h3>
				<br/>
				<input className='inputs'
				type = 'text'
				placeholder= 'Title'
				aria-label='title'
				onChange={(e) =>setTitle(e.target.value)}
				value = {title}
				/>
				<br/>
				<input className='inputs'
				type = 'text'
				placeholder= 'Article Content'
				aria-label='Content'
				onChange={(e) =>setContent(e.target.value)}
				value = {content}
				/>
				<br/>
				<input className='inputs'
				type = 'text'
				placeholder= 'Article Name'
				aria-label='name'
				onChange={(e) =>setName(e.target.value)}
				value = {name}
				/>
				<br/>
				<input className='inputs'
				type = 'text'
				placeholder= 'Email'
				aria-label='email'
				onChange={(e) =>setEmail(e.target.value)}
				value = {email}
				/>
				<br/>
				<input className='inputs'
				type = 'text'
				placeholder= 'Tags'
				aria-label='tags'
				onChange={(e) =>setTags(e.target.value)}
				value = {tags}
				/>
				<br/>
				<br/>
              <button className = 'buttonSubmit'  type= 'submit'>Submit</button>
			</form>
		   </div>
		   :
		   <div>
			<h2 className='header2'>Interesting Articles</h2>
			<PagesList pages={pages} setPages= {setPages} />
			<br/>
			<button className='buttonAdd' onClick = {()=>{setIsAddingArticle(!isAddingArticle)}}>Add Article</button>
			</div>
		   }
		</main>
	)
}