import React, { useState, useEffect } from 'react';

function FormData() {
    const [headerText, setHeaderText] = useState('');
    const [footerText, setFooterText] = useState('');
    const [randomImg, setRandomImg] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState('true');
    const styles = {backgroundImage: `url(${randomImg})`};

    const handleSubmit = (e) => {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * images.length);
        const randImage = images[randNum].url;
        setRandomImg(randImage);
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
               const images = response.data.memes;
               setImages([...images,
                {
                    id: images.length,
                    value: Math.random() * 100
                }
                ]);
        }).catch(() => setIsLoading(true))
    }, []);


    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input
                        type="text"
                        name="headerText"
                        value={headerText}
                        placeholder ="Enter HeaderText"
                        onChange={event => setHeaderText(event.target.value)}
                    />
              &nbsp;&nbsp;&nbsp;
            <input
                        type="text"
                        name="footerText"
                        value={footerText}
                        placeholder ="Enter FooterText"
                        onChange={event => setFooterText(event.target.value)}
                    />
               &nbsp;&nbsp;&nbsp;
                <button>Submit</button>
                &nbsp;&nbsp;&nbsp;
            </form>
            <div className="meme"  style ={({backgroundImage: `url(${randomImg})`})}>
                <h4 className="top-left">{headerText}</h4>
                <h4 className="bottom-left">{footerText}</h4>
            </div>
        </div>
    );
}

export default FormData;