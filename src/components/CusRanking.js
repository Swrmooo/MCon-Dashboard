import React, { useState } from "react";
import '../components/CusRanking.css'
import firstIcon from '../assets/Icon Ranking_Rank 1.png';
import secondIcon from '../assets/Icon Ranking_Rank 2.png';
import thirdIcon from '../assets/Icon Ranking_Rank 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Ranking = (props) => {

  const {ranking} = props
  const sortedRanking = ranking.sort((a, b) => b.total - a.total);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Top 5");
  const [previewText, setPreviewText] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleHover = (text) => {
    setPreviewText(text);
  };

  const slicedRanking = (() => {
    switch (selectedOption) {
      case "Top 5":
        return sortedRanking.slice(0, 5);
      case "Top 10":
        return sortedRanking.slice(0, 10);
      case "Top 100":
        return sortedRanking.slice(0, 100);
      default:
        return sortedRanking.slice(0, 5);
    }
  })();

  if (!ranking) {
    return("loading")
  }
  
  return (
    <div className="ranking" style={{borderRadius: "5px 5px 5px 5px",boxShadow: "0px 1px 3px grey", width: "350px",textAlign: "center",height:'100%',maxHeight: "400px", overflowY: "auto",position: "relative",}}>
      <div className='ranking-filter' style={{boxShadow: "0px 3px 5px lightgrey"}} onClick={toggleDropdown} >
        {selectedOption}
        <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:'20px'}}/> 
        {/* {selectedOption} {previewText && ` - ${previewText}`} */}
      </div>  
        {dropdownOpen && (
            <div className='filter-dropdown' style={{right:'95px',width:'110px'}}>
              <div className={`filter-item ${selectedOption === "Top 5" ? "active" : ""}`} 
                style={{padding:'5px 0px 5px 10px'}} onClick={() => handleOptionChange("Top 5")}onMouseEnter={() => handleHover("Top 5")}>
                1. Top 5
              </div>
              <div className={`filter-item ${selectedOption === "Top 10" ? "active" : ""}`}
                style={{padding:'5px 0px 5px 10px'}} onClick={() => handleOptionChange("Top 10")} onMouseEnter={() => handleHover("Top 10")}>
                2. Top 10
              </div>
              <div className={`filter-item ${selectedOption === "Top 100" ? "active" : ""}`}
                style={{padding:'5px 0px 5px 10px'}} onClick={() => handleOptionChange("Top 100")} onMouseEnter={() => handleHover("Top 100")}>
                3. Top 100
              </div>
            </div>
          )}

      <table style={{fontSize: "20px", width:'100%'}}>
        <tbody>
        {slicedRanking.map((rank, index) => (
            <tr key={rank.id} >
              <td style={{ width: '15px', padding:'10px'}}>
                {index === 0 && <img src={firstIcon} style={{ width: '25px'}} alt="Rank 1" />}
                {index === 1 && <img src={secondIcon} style={{ width: '25px'}} alt="Rank 2" />}
                {index === 2 && <img src={thirdIcon} style={{ width: '25px'}} alt="Rank 3" />}
                {index >= 3 && index + 1} 
              </td>
              <td style={{textAlign: "left",paddingLeft:'10px'}}>{rank.name}</td>
              <td style={{textAlign: "right",paddingRight:'40px'}}>{rank.total.toLocaleString()} คิว</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;