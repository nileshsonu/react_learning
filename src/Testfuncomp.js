import React from 'react'

function Testfuncomp(props){
  
  const sayhi=()=>{
    alert('Welcome here');
  }

  return(
    <div>
      <div> this is a functional component </div>
      <h1 onClick={sayhi}> {props.info.name} {props.data}</h1>
    </div>
  )
}

export default Testfuncomp;