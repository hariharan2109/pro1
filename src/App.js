import React, { useState, useEffect } from 'react';
import './index.css';

function QuoteMachine() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');

  useEffect(() => {
    getQuote();
    getBackgroundImage();
  }, []);

  useEffect(() => {
    setTwitterLink(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`);
    setFacebookLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
    setInstagramLink(`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`);
  }, [quote, author]);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.log(error));
  };

  const getBackgroundImage = () => {
    const images = [
  
    ];
    setBackgroundImage(images[randomNumber]);
  };

  return (
    <div className="container" style={{ backgroundImage: 
      "url('https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60')",backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
      <div className="navbar">
       <header><center><h1>Latest Quotes</h1></center></header> 
        <div className="social-media">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="quote-box">
        <div className="quote">{quote}</div>
        <div className="author">- {author}</div>
        <button className="new-quote-btn" onClick={() => {
          getQuote();
          getBackgroundImage();
        }}>New Quote</button>
         
      </div>
      <div>
    </div>
   
     <footer id="foot" >
     <center><h2><a href="https://in.linkedin.com/">LINKED IN</a></h2></center>
     <center><h2><a href="https://github.com/">GIT HUB</a></h2></center>

   </footer>
   </div>
  );
}

export default QuoteMachine;
