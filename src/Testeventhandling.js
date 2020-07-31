import React from 'react'

class Testeventhandling extends React.Component{
  
      testfun()
    {
      alert('hi')
    }

  render(){
    return(
      <div>
        <div> Event Handling</div>
        <button onClick={()=>this.testfun()}> Click Me! </button>
        <button onClick={this.testfun.bind()}> Click Me! </button>
        {/*https://www.youtube.com/watch?v=NRCdSZi4Ro0&list=PL8p2I9GklV44oDSE3j-E-OkvxFkz5a1d8&index=11*/}
      </div>
    )

  }
}

export default Testeventhandling;