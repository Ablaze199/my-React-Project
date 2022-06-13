import React from "react";
import ReactDom from 'react-dom'
import './index.css';

const books = [
  {  id: 1,
  img: 'https://m.media-amazon.com/images/I/81j04LrmYDL. _AC_UL320_.jpg',
  title:'Rotten to The Core and the root',
  author: 'Chris Hemsworth',
},

{  
  id: 2,
  img: 'https://m.media-amazon.com/images/I/81P9FK0PXyL._AC_UL320_.jpg',
  title:'The alpha contract',
  author: 'Elliot Grayson',
},
{  
  id: 3,
  img: 'https://m.media-amazon.com/images/I/81823bTjKHL._AC_UL320_.jpg',
  title:'The Last Thing He Told Me',
  author: 'Laura Dave',
},
];  

 function BookList() {
   return  <section className='booklist'>{books.map((book, index)=>{
     const { img, title, author } = book;
     return <Book key={book.id} {...book}></Book>;
    })}</section>;
 }

 const Book = (props) => {
    const { img, title, author,  } = props;
    const clickHandler= () => {
      alert('hello world');
    }
   return (
     <article className='book'>
     <img 
   src= {img}alt=''/>
   <h1>{title}</h1>
   <h4>{author}</h4>
   <button type='button' onClick={clickHandler}>ref button</button>
   
   </article>
   );
    };



ReactDom.render (<BookList />, document.getElementById('root'));

