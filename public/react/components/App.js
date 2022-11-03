import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import e from 'cors';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [article, setArticle] = useState([]);
	const [isAddingArticle, setIsAddingArticle] = useState(false)
	const [title,setTitle] = useState('');
	const [contect,setContent] = useState('');
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

    const handleSubmit = async 





	useEffect(() => {
		fetchPages();
	}, []);




	return (
		<main>	
      <h1>WikiVerse</h1>
	       {isAddingArticle ?
		   <div>
			<form onSubmit={handleSubmit}>
				<h3>Add Article</h3>
				<input 
				type = 'text'
				placeholder= 'Title'
				aria-label='title'
				onChange={(e) =>setTitle(e.target.value)}
				value = {title}
				/>
				<input 
				type = 'text'
				placeholder= 'Article Content'
				aria-label='Content'
				onChange={(e) =>setContent(e.target.value)}
				value = {content}
				/>
				<input 
				type = 'text'
				placeholder= 'Article Name'
				aria-label='name'
				onChange={(e) =>setName(e.target.value)}
				value = {name}
				/>
				<input 
				type = 'text'
				placeholder= 'Email'
				aria-label='email'
				onChange={(e) =>setEmail(e.target.value)}
				value = {email}
				/>
				<input 
				type = 'text'
				placeholder= 'Tags'
				aria-label='tags'
				onChange={(e) =>setTags(e.target.value)}
				value = {tags}
				/>
				
              <button type= 'submit'>Submit</button>
			</form>
		   </div>
		   :
		   <div>
			<h2>Interesting Articles</h2>
			<PagesList pages={pages} setPages= {setPages} />
			<button onClick = {()=>{setIsAddingArticle(!isAddingArticle)}}>Add Article</button>
			</div>
		   }
		</main>
	)
}