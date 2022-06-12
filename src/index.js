import React from "react";
import ReactDom from 'react-dom'
import './index.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81j04LrmYDL. _AC_UL320_.jpg',
  title:'Rotten to The Core and the root',
  author: 'Chris Hemsworth'
}
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81P9FK0PXyL._AC_UL320_.jpg',
  title:'The alpha contract',
  author: 'Elliot Grayson'
};

 function BookList() {
   return (
    <section className='booklist'>
     <Book  img={firstBook.img} title={firstBook.title} author={firstBook.author}>

     </Book>
     
     <Book  img={secondBook.img} title={secondBook.title} 
     author={secondBook.author}/>
    
     </section>
   );
 }
 const Book = (props) => {
    const { img, title, author,  } = props;
   return (
     <article className='book'>
     <img 
   src= {img}alt=''/>
   <h1>{title}</h1>
   <h4>{author}</h4>
   </article>
   );
    };



ReactDom.render (<BookList />, document.getElementById('root'));

