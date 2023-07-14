import React, { useState, useEffect } from "react";
import '../components/searchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faPlus ,faMinus ,faTrash  } from '@fortawesome/free-solid-svg-icons'

const SearchBox = (props) => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    console.log('search', searchTerm);
    setValue(searchTerm);
    setSearchResult(searchTerm);
    updateSearchHistory(searchTerm);
  }

  const onDropdownItemClick = (searchTerm) => {
    setValue(searchTerm);
    setSearchResult(searchTerm);
    updateSearchHistory(searchTerm);
  }

  const updateSearchHistory = (searchTerm) => {
    const updatedSearchHistory = [searchTerm, ...searchHistory];
    setSearchHistory(updatedSearchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
  };

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  const onResultItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const onDeleteItemClick = (index) => {
    const updatedSearchHistory = [...searchHistory];
    updatedSearchHistory.splice(index, 1);
    setSearchHistory(updatedSearchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
  };

  return (
    <div style={{display:"flex",flexDirection:"column", width:'100%' ,textAlign:"center"}} className='box'>
      <div style={{display:"flex",marginLeft:'10px'}} className='search-bar'>
        <div style={{position: 'relative'}}>
          <FontAwesomeIcon icon={faSearch} style={{color:'lightgrey' , position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)'}} />
        </div>
        <input style={{borderRadius:"20px 20px 20px 20px", border:'2px solid lightgrey', width:'400px',fontSize:'20px', padding:'5px 0px 5px 40px' ,
        backgroundSize: "10px 20px",}}  type="text" value={value} onChange={onChange} placeholder="ค้นหา บริษัท"/>   
      </div>

      <div className="dropdown" >
        {value && data.filter(item => {
          const searchTerm = value.toLowerCase();
          const word = item.name.toLowerCase();
          return searchTerm && word.startsWith(searchTerm) && word !== searchTerm;
        })
        .map((item=> (
        <div key={item.name} onClick={()=>onDropdownItemClick(item.name)} className="dropdown-item">
          <FontAwesomeIcon icon={faSearch} style={{ margin: "0px 10px 0px 15px" , color:'lightgrey'}} />
          {item.name}    
        </div> )))}
      </div>
      
      <div className="result" style={{ maxHeight: "600px", overflowY: "auto", marginLeft:'10px' }}>
          {searchHistory.map((item, index) => {
             const foundItem = data.find((dataItem) => dataItem.name.toLowerCase() === item.toLowerCase());
            if (foundItem) {
                const isActive = index === activeItem;
                return (
                  <div className={`result-item ${isActive ? 'active' : ''}`} style={{marginTop:'10px'}} key={index} onClick={() => onResultItemClick(index)}>
                      <div className="result-content">
                        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDeleteItemClick(index)} />
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                          <p> {foundItem.name } </p>
                          <p> {foundItem.total.toLocaleString()} คิว<FontAwesomeIcon className={`plus ${isActive ? "minus" : ""}`} icon={isActive ? faMinus : faPlus} style={{ marginLeft: '20px'}} /> </p>
                        
                        </div>
                      </div>
                      
                      {isActive && (
                        <div className="result-item-detail" style={{backgroundColor:'white',borderRadius: "10px 10px 10px 10px"}}>
                          {foundItem.numIn.map((numItem, numIndex) => {
                            const teamName = Object.keys(numItem)[0];
                            const teamValue = Object.values(numItem)[0];
                            

                            return (
                              <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '18px' }} key={numIndex}>
                                <p>{teamName}</p>
                                <p>{teamValue.toLocaleString()} คิว</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                  </div>
                );
              }
            return null;
            })}    
        </div>
    </div>
  )
}
export default SearchBox ;