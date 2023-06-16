import React from 'react'

function PartOfSpeech({data, onPOSClick}){
    if (!data || data.length === 0) {
        return null; // Handle empty data or loading state
      }
    
    return(
        <div>
            <ul className='pos'>
                {data[0].meanings.map((meaning, index) => (
                    <li key={index} onClick={() => onPOSClick(meaning.partOfSpeech)}>
                    {meaning.partOfSpeech}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PartOfSpeech