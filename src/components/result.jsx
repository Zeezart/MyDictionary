import React, { useState, useEffect }from 'react'
import Word from './word'
import PartOfSpeech from './partOfSpeech'
import Meanings from './Meanings'

function Result(props){

    const [posActive, setPosActive] = useState()

    const [meaningDisplay, setMeaningDisplay] = useState(false)
    const [mean,setMean] = useState([])
 
    function handlePOS(partOfSpeech){
        setPosActive(partOfSpeech)
        setMeaningDisplay(true)
    }

    useEffect(() => {
        if (posActive) {
         
          const meanings = props.apiData[0].meanings;
          const filteredMeanings = [];
          
          meanings.forEach(meaning => {
              if (meaning.partOfSpeech === posActive) {
                  meaning.definitions.forEach(definition => {
                      filteredMeanings.push(definition.definition);
                    });
                }
            });
            
            setMean(filteredMeanings);
        }
        
      }, [posActive, props.apiData]);

  
    return(
        <div>
            <Word data={props.apiData}/>
            <PartOfSpeech data={props.apiData} onPOSClick = {handlePOS} />
            <Meanings data={props.apiData} mean={mean} meaningDisplay={meaningDisplay}/>
        </div>
    )
}

export default Result