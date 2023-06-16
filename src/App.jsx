import react, { useState,useEffect } from 'react'
import './App.css'
import SearchBar from './components/searchbar'
import Result from './components/result'

function App(){
  const [searchedWord,setSearchedWord] = useState("")
  const [apiData, setApiData] = useState([])
  const [displayResults, setDisplayResults] = useState(false)
  
  const [searchInput, setSearchInput] = useState("")
    
  function handleChange(event){
      setSearchInput(event.target.value)    
  }
  
  const fetchDictionarydata = async () => {
      const api =  `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      const apiResult = await fetch(api)
      const apiJSON = await apiResult.json()
      setApiData(apiJSON)
  }

  function handleClick(){
    setSearchedWord(searchInput)
  }


  useEffect(() => {
    if (searchedWord !== '') {
      fetchDictionarydata();
      setDisplayResults(true);
    }
  }, [searchedWord]);
  return(
    <div className='app'>
      <h6>ENGLISH DICTIONARY</h6>
      <div className='dictionary-container'>
        <SearchBar 
          handleClick={handleClick}
          handleChange={handleChange}
          value={searchInput}
        />
        
        {displayResults && <Result apiData={apiData}/>}
      </div>
      <h6 className='zee'>Created by Zeezart 2023</h6>
    </div>
  )
}

export default App
