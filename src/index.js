import React from "react";
import ReactDom from 'react-dom'
import './index.css';
const title = 'Rotten to The Core and the root'
     const Author = 'Chris Hemsworth'
     const img = 'https://m.media-amazon.com/images/I/81j04LrmYDL. _AC_UL320_.jpg'
 function BookList() {
   return (
    <section className='booklist'>
     <Book />
     </section>
   );
 }
 const Book = () => {
   
   return (
     <article className='book'>
     <img 
   src= {img}alt=''
   />
   <h1>{title}</h1>
   <h4>{Author}</h4>
   </article>
   );
    };



ReactDom.render (<BookList />, document.getElementById('root'));

