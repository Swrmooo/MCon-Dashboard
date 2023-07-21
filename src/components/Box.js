import React from 'react'

function Box(props) {
  const { title, colorF, num, suffix } = props;
  const formattedNum = num !== undefined ? num.toLocaleString() : 0;

  return (
    <div style={{backgroundColor: "#E7E7E7" ,display:"flex",flexDirection:"column",borderRadius:"5px 5px 0px 0px", boxShadow:"0px 1px 3px grey", width:"300px", height:"180px"}} className='box'>
      <h1 style={{fontSize:"20px",display:'flex',justifyContent:'center'}} >
          {props.title}</h1>
          {/* border:'1px dotted', */}
      <div style={{backgroundColor:"white",display:"flex",flexDirection:"row" ,width:"100%", height:"100%"}} className='box-body' >   
        <div style={{color: props.colorF, fontSize: "60px",fontWeight:'bold',width:"100%",display:'flex',alignItems:'center',justifyContent:'center'}}>{formattedNum}</div>
        <div style={{fontSize: "25px",width:"35%",height:'100%',display:'flex',alignItems:'center',marginTop:'10px'}}>{props.suffix}</div>
      </div>
    </div>
  )
}
export default Box;
