import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

function SearchBar(props){

    return(
        <div className='search-bar'>
            <FaSearch 
                className='search-icon'
            /> 
            <input 
                placeholder='Type word'
                value={props.value}
                onChange={props.handleChange}
                className='input-bar'
            />
            <button onClick={props.handleClick} className='search-button'>Search</button>
        </div>
    )
}

export default SearchBar