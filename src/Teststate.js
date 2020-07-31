import React from 'react'

class Teststate extends React.Component{
  
  constructor(){
    super();
    this.state={
      name:'Nilesh',
      email:'nileshsonu@gmail.com',
      count:0
    }
  }

  changename(){
    this.setState({
      name:'Sayli',
      //count:this.state.count +1
    })
  }

  countplus(){
    this.setState({
     count:this.state.count +1
    })
  }

  countminus(){
    this.setState({
      count:this.state.count -1
    })
  }

  render(){
      console.log('updated'); // whenever state update render called everytime
      return(
        <div> 
          <h1> Count : {this.state.count} </h1>
          <h1> Hello {this.state.name} </h1>
          <h1> Email : {this.state.email} </h1>
          <button onClick={()=>{this.changename()}}> Update Name </button>
          <button onClick={()=>{this.countplus()}}> + </button>
          <button onClick={()=>{this.countminus()}}> - </button>
        </div>

    )
  }
}

export default Teststate;