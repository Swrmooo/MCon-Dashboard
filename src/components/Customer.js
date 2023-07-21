import React, { useState, useEffect } from "react";
import '../components/Customer.css'
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

  const filteredResults = value
    ? data.filter((item) => {
      const searchTerm = value.toLowerCase();
      const word = item.name.toLowerCase();
      return word.includes(searchTerm);
    })
    : data;

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
        {filteredResults.map((item, index) => (
          <div key={item.id} className={`result-item ${activeItem === index ? 'active' : ''}`} onClick={() => onResultItemClick(index)}>
            <div style={{display:'flex', justifyContent:'space-around'}}>
              <p>บริษัท {item.name}</p>
              <p>{item.total.toLocaleString()} คิว <FontAwesomeIcon icon={activeItem === index ? faMinus : faPlus} className="plus" /></p>
            </div>
            
            {activeItem === index && (
              <div> {item.numIn.map((customer, i) => {
                const team = Object.keys(customer)[0];
                const number = Object.values(customer)[0];
                return (
                  <div className="result-content" key={i}>
                    <p>{`${team}`}</p>
                    <p>{`${number}`}คิว</p>
                </div>
                );
              })}
              </div>
            )}  
          </div>
          ))}
      </div>
    </div>
  )
}
export default SearchBox ;