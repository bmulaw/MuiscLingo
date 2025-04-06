import React, { useState } from 'react';
import french_lyrics from '../example/es_lyrics.json'

export default function Form() {
    const [count, setCount] =  useState(0);

    async function tryAPI () {
        fetch('https://api.lyrics.ovh/v1/aventura/mi%20puerto%20rico')
        .then(res => res.json())
        .then(data => console.log({data}))
    }

    function getHtml() {
        let lyric = french_lyrics.song.description.html;
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
        console.log({clean_lyric});
        console.log({lyric_array});

        return (
            <div> 
                { 
                lyric_array.map((item, index) => {
                    if (item.includes('[') || item.includes(']') ) {
                        console.log(item)
                        return( <div key={index}> <p></p> {decodeURI(item)} </div> )
                    }
                    return ( <div key={index}> {decodeURI(item)} </div> )
                })}
            </div>
        );
    }

    function handleClick() {      
        // removeBreaks(french_lyrics.song.description.html)
        setCount(count +1)
        tryAPI()
    }
  
    return (
        <div>
        <div>{ getHtml() }</div>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    );
}
