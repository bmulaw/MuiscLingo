import React, { useState } from 'react';
import french_lyrics from '../example/es_lyrics.json'

export default function Form() {
    const [count, setCount] =  useState(0);

    // function consoleBreaks(word, i) {
    //     word = word.slice(i, i+3)
    //     console.log(word)
    // }
    
    // function removeBreaks(song) {
    //     song = song.split(' ')
    //     song.map((word, i) => {
    //         console.log(word.indexOf('<'))
    //         word = word.split(' ');
    //         index = word.indexOf('<');
    //         word.map((text, j) => {
    //             if (text === '<' ) {
    //             console.log(index)

    //                 // console.log(text, j)
    //             }
    //             return 0;
    //     })
    //         // if (word[i] === '<') {
    //         //     console.log(word.slice(i, i+3), i)
    //         // }
    //         return 0;
    //     })
    // }
    
    // function makeTag(text) {
    //     console.log({text})
    //     return (
    //         <i>
    //             {text}
    //         </i>
    //     )
    // }

    // function iterate(song) {
    //     // const tag = makeTag(song.slice(3,119));
    //     song = song.split(" ");
    //     return ( 
    //         <div>
    //             {song.map((item, index) => {
    //                 return <div key={index}> {item} </div>;
    //             })}
    //         </div>
    //     )
    // }

    // function fakeLyrics() {
    //     console.log(french_lyrics.song.description.html)
    //     const tag = iterate(french_lyrics.song.description.html)
    //     return tag
    // }

    // function getHtml() {
        // let local_htmlObject = document.createElement('div');
        // let local_htmlObject = fakeLyrics();
        // console.log(local_htmlObject)
        // return (
        //     <div>{local_htmlObject}</div>
        // )
    // }

    async function tryAPI () {
        fetch('https://api.lyrics.ovh/v1/aventura/mi%20puerto%20rico')
        .then(res => res.json())
        .then(data => console.log({data}))
    }

    function getHtml() {
        let lyric = french_lyrics.song.description.html;
        let clean_lyric = lyric.replaceAll('<p>', '')
                            .replaceAll('</p>', '')
                            // .replaceAll('<br>', '')
                            .replaceAll('<br/>', '')
                            .replaceAll('<i>', '')
                            .replaceAll('</i>', '')
                            .replaceAll('<em>', '')
                            .replaceAll('</em>', '')
                            .replaceAll('</a>', '');
        let lyric_array = clean_lyric.split('<br>');
        console.log({clean_lyric})
        console.log({lyric_array})

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
        )

    }

    // console.log(getHtml())

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
