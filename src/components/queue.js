import React from 'react'
import plantIcon from '../assets/Plant icon.png';


function Queue(props) {
  return (
    <div style={{backgroundColor: props.color ,display:"flex",flexDirection:"column",borderRadius:"5px 5px 5px 5px", boxShadow:"0px 1px 2px grey", width:"100%", height:"200px", textAlign:"center"}} className='box'>

        <h1 style={{borderRadius:"5px 5px 0px 0px", color:"white", fontSize:"22px",padding:"10px 100px",width:"250px" }} className=':"box-header'>{props.title}</h1>   
       
        <div style={{backgroundColor:"white",display:"flex",flexDirection:"row", justifyContent: "space-around" , fontSize: "50px",width:"100%", height:"100%", paddingTop:"25px"}} className='box-body' >
                <div> <img src={plantIcon}></img></div>
                <div style={{color: props.color}}>{props.num}</div>
                <div >คิว</div>
        </div>
    </div>
  )
}
export default Queue;
