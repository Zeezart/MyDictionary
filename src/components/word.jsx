import React, { useState } from 'react'
import {FaVolumeUp} from 'react-icons/fa'

function Word({data}){

    const [audioLink, setAudioLink] = useState('')
    
    function handleClick(){
        
        data.forEach((info) => {
            info.phonetics.forEach((phonetic) => {
              setAudioLink(phonetic.audio);
            });
          });
        const audio= new Audio(audioLink)
        audio.play() 
    }

    
    return(
        <div className='word-container'>
            <div className='word'>
                {
                    data.length > 0 && (
                    <h1 key={data[0].word}>{data[0].word}</h1>
                    )
                }
            </div>
            
            <div className='phonetics'>
                {
                    data.length > 0 && (
                    <p key={data[0].phonetic}>{data[0].phonetic}</p>
                    )
                }

                <FaVolumeUp 
                    className='volume-icon'
                    onClick={handleClick}
                />
            </div>    
        </div>
    )
}

export default Word