import React from 'react'

class Testshowhide extends React.Component{
  
  constructor(){
    super();
    this.state={
      show:true
    }
  }


  render(){
        return(
        <div> 

          {
            this.state.show ?  <h1> Show and Hide Me !!</h1> : null
          }

         
          {/*<button onClick={()=>{this.setState({show:false})}} > Click Me </button>         // this will only hide elment */} 
          <button onClick={()=>{this.setState({show:!this.state.show})}} > Click Me </button>  {/*!this.state.show  -> used to make opposite of state value..eg..if show var value is true then false and if false then true*/}          



          
        </div>

    )
  }
}

export default Testshowhide;