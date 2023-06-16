import React from 'react'

function Meanings(props){
    
    return(
        <div className='meanings'> 
        {props.meaningDisplay ? 
            <ol>
                {props.mean.map((mean,index) => (
                    <li key={index}>{mean} <hr /></li>
                ))}
            </ol>:

            <ol>
                {props.data.map(datum => datum.meanings.map(meaning => meaning.definitions.map(def=>{
                    return(
                        <li>{def.definition}</li>
                    )
                })))}
            </ol>
        }
        </div>
    )
}

export default Meanings
