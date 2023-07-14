import React, { useState } from 'react'
import '../components/Plant.css'
import plantIcon from '../assets/Plant icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faPencilAlt,faSave } from '@fortawesome/free-solid-svg-icons'


function Plant( {data} ) {

    const [target, setTarget] = useState([
        758, 521, 674, 321, 452, 923, 276, 598, 709, 405, 
        831, 247, 513, 718, 389, 237, 598, 440, 993, 720
      ]);

    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const [filterOption, setFilterOption] = useState('All');    

    const [editingTarget, setEditingTarget] = useState('');
    const [editingValue, setEditingValue] = useState('');

    const handleEditingTarget = (index) => {
        setEditingTarget(index);
        setEditingValue(target[index].toString());
    };

    const handleEditingValueChange = (event) => {
        setEditingValue(event.target.value);
    };

    const handleTargetChange = (event) => {
        setEditingTarget(event.target.value);
    };
      
    const onChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setSearchResult(null);
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

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
      };
    
    const filterData = (data) => {
        let filteredData = [...data];
       
        if (searchResult) {
            filteredData = filteredData.filter((item) => item.name.toLowerCase().includes(searchResult.toLowerCase()));
          }
        //   -------------------------------------

        if (filterOption === 'Top5') {
            filteredData = filteredData.sort((a, b) => b.total - a.total).slice(0, 5);
            
        } else if (filterOption === 'Top10') {
            filteredData = filteredData.sort((a, b) => b.total - a.total).slice(0, 10);
        }
        
          return filteredData;
      };

    
  return (
    
    <div className='plant' style={{maxHeight: "630px", overflowY: "auto"}}>

        <div className='searhBar' style={{position:'fixed',width:'755px',backgroundColor:'white'}}>
            <div style={{position: 'relative'}}>
                <FontAwesomeIcon icon={faSearch} style={{color:'lightgrey' , position: 'absolute', left: '15px', top: '50%', transform: 'translateY(70%)'}} />
            </div>
            <div style={{display:'flex'}}>
                <input style={{borderRadius:"20px 20px 20px 20px", border:'2px solid lightgrey', width:'400px',fontSize:'20px', padding:'5px 0px 5px 40px' ,
                backgroundSize: "10px 20px",}}  type="text" value={value} onChange={onChange} placeholder="ค้นหา แพล้นท์"/>  
                
                <div className='ranking'>
                    <select className='ranking-item' onChange={handleFilterChange} style={{marginLeft: '10px'}}>
                        <option value="" disabled selected hidden>กรุณาเลือก</option>
                        <option value='All'>All</option>
                        <option value='Top5'>Top 5</option>
                        <option value='Top10'>Top 10</option>
                    </select>
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
            </div>
        </div> 

        <div className='Box' style={{display:'grid',gridTemplateColumns:'1fr 1fr', rowGap:'10px' ,textAlign:"center", marginTop:'50px'}} >
            {filterData(data).map((plantData, index) => (
                <div className='Box-item' key={plantData.name} >
                    <div className='Box-header'>{plantData.name}</div>
                    <div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:'30px'}}>
                            <div><img style={{width:'80px'}} src={plantIcon} alt="Plant Icon" /></div>
                            <div className='delivery'>
                                <div style={{color:'#2690E8', fontWeight:'bold'}}>Delivery Volume:</div>
                                <div style={{color:'#2690E8', fontWeight:'bold',fontSize:'45px'}}>{plantData.total.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{border:'1px solid lightgrey' , width:'90%', marginLeft:'15px'}}></div>
                   
                    <div className='Box-bottom' style={{display: 'flex',justifyContent:'space-around' ,margin: '15px 0px 0px 0px', fontSize: '20px' }}>
                        <div>Target Volume</div>
                       
                        {editingTarget === index ? (
                            <>
                            <input className='edit-target' type="text" value={editingValue} onChange={handleEditingValueChange} onBlur={() => {
                                const newTarget = [...target];
                                newTarget[index] = editingValue;
                                setTarget(newTarget);
                                setEditingTarget('');
                                }}
                                onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    const newTarget = [...target];
                                    newTarget[index] = editingValue;
                                    setTarget(newTarget);
                                    setEditingTarget('');
                                }
                                }}
                            />
                            <div onClick={() => {
                                const newTarget = [...target];
                                newTarget[index] = editingValue;
                                setTarget(newTarget);
                                setEditingTarget('');
                            }}>
                                <FontAwesomeIcon className='icon' icon={faSave} />
                            </div>
                            </>
                        ) : (
                            <>
                            <div>{Intl.NumberFormat().format(target[index])}</div>
                            <div onClick={() => handleEditingTarget(index)}>
                                <FontAwesomeIcon className='icon' icon={faPencilAlt} />
                            </div>
                            </>
                        )}
                    </div> */}
                </div>
            ))}
        </div>
    </div>
    )
}
export default Plant ;



