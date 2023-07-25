import React from 'react'
import plantIcon from '../assets/Plant icon.png';


function Queue(props) {
  return (
    <div style={{backgroundColor: props.color ,display:"flex",flexDirection:"column",borderRadius:"5px 5px 5px 5px", boxShadow:"0px 1px 2px grey", width:"350px", height:"180px", textAlign:"center"}} className='box'>

        <div style={{borderRadius:"5px 5px 0px 0px", color:"white", fontSize:"22px",padding:"10px 10px 10px 10px",width:"100%" }} className=':"box-header'>
          {props.title}</div>   
       
        <div style={{backgroundColor:"white",display:"flex",flexDirection:"row", justifyContent: "space-evenly", height:"100%", paddingTop:"25px"}} className='box-body' >
                <div style={{}}> <img src={plantIcon}></img></div>
                <div style={{marginTop:'5px',color: props.color,fontWeight:'bold',fontSize:'55px'}}>{props.num}</div>
                <div style={{marginTop:'30px',fontSize: "30px"}}>คิว</div>
        </div>
    </div>
  )
}
export default Queue;
