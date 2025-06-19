import React, { useState } from 'react';
import french_lyrics from '../example/es_lyrics.json'

export default function Form() {
    const [count, setCount] =  useState(0);

    const [isAventura, setIsAventura] =  useState(true);
    const [apiLyrics, setApiLyrics] = useState("");

    async function tryAPI () {
        await fetch('https://api.lyrics.ovh/v1/bad%20bunny/nuevayol')
        .then(res => res.json())
        .then(data => setApiLyrics(data.lyrics))
        
        console.log("fetched bad bunny song");
    }

    function getHtml(givenLyrics) {
        let lyric = french_lyrics.song.description.html;
        if (!isAventura ) {
            lyric= givenLyrics
            console.log("listening to Bad Bunny with lyric: ", {lyric});
        } else {
            console.log("listening to Aventura with lyric: ", {lyric});
        }
        
        let clean_lyric = lyric.replaceAll('<p>', '')
                            .replaceAll('</p>', '')
                            .replaceAll('<br>', '')
                            .replaceAll('<br/>', '')
                            .replaceAll('<i>', '')
                            .replaceAll('</i>', '')
                            .replaceAll('<em>', '')
                            .replaceAll('</em>', '')
                            .replaceAll('</a>', '');
        let lyric_array = clean_lyric.split('<br>');

        return (
            <div> 
                { 
                lyric_array.map((item, index) => {
                    return ( <div key={index}> {decodeURI(item)} </div> )
                })}
            </div>
        );
    }

    async function handleClick() {      
        setCount(count+1)
        console.log("button clicked ", count , " times")
        if (count === 0) {
            await tryAPI()
        }
        setIsAventura(!isAventura)
    }
  
    return (
        <div>
        <div>{ getHtml(apiLyrics) }</div>
            <button onClick={handleClick}>
                {isAventura ?  "Aventura" : "Bad Bunny"}
            </button>
        </div>
    );
}
