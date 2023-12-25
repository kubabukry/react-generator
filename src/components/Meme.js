import React from 'react';
import '../App.css';
import memesData from '../memesData.js';

export default function Meme(){

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  
  function getMemeImage(){
      const randomNumber = Math.floor(Math.random() * allMemeImages.data.memes.length);
      const url = allMemeImages.data.memes[randomNumber]["url"];
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
      }))
  }
  
    return (
    <main className="meme">
      <div className='form'>
        <input 
            className='form--input' 
            type="text"
            placeholder='Top text'
        />
        <input 
            className='form--input' 
            type="text" 
            placeholder='Bottom text'
        />
        <button onClick={getMemeImage} className='form--button' type="submit">Get a new meme image ✨</button>
      </div>
      <img className='meme--image' src={meme.randomImage} alt='random meme' />
    </main>
  )
};