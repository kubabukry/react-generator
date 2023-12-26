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

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

    return (
    <main className="meme">
      <div className='form'>
        <input 
            className='form--input' 
            type="text"
            placeholder='Top text'
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            className='form--input' 
            type="text" 
            placeholder='Bottom text'
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button onClick={getMemeImage} className='form--button' type="submit">Get a new meme image ✨</button>
      </div>
      <div className='meme'>
      <img className='meme--image' src={meme.randomImage} alt='random meme' />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
};