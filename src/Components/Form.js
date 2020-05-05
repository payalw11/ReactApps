import React, { useState, useEffect } from 'react';
//import GetImage from './Components/Fetch';

function FormData(){
    const [headerText, setHeaderText] = useState('');
    const [footerText, setFooterText] = useState('');
    const [randomImg, setRandomImg] = useState('https://api.imgflip.com/get_memes');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState('true');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(headerText,'>>>>',footerText);
        console.log(images.length,"images.length");
        const randNum = Math.floor(Math.random() * images.length);
        const randImage = images[randNum].url;
        setRandomImg(randImage);
    }

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
         const {images} = response.data;
         console.log(images[0])
             setImages([...images,
                 {
                   id: images.length,
                   value: Math.random() * 100
                 }
             ]);
 
        }).catch(() => setIsLoading(true))
     
    },[]);
      

    return(
        <div>
        <form onSubmit = {handleSubmit}>
            <label>
            HeaderText:
            <input 
                type="text"
                name = "headerText"
                value = {headerText}
                onChange = {event => setHeaderText(event.target.value)}
            />
            </label>
            <label>
            FooterText:
            <input 
                type="text"
                name = "footerText"
                value = {footerText}
                onChange = {event => setFooterText(event.target.value)}
            />
            </label>
           <button>Submit</button>
        </form>
        <div className="meme">
         <img src={randomImg} alt=""></img>
         <h2 className="top">{headerText}</h2>
         <h2 className="bottom">{footerText}</h2>
        </div>
        </div>
    );

}

export default FormData;