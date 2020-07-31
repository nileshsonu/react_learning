import React from 'react';

class Testclasscomp extends React.Component{

  render(){
      return(

        <div>
          <div className="mydiv"> This is a class Component..</div>  
          <p> {this.props.info.name} {this.props.data} </p>
        </div>
        // below is the code that how we can write without JSX
        //syn is -> React.createElement(tag,classname,text)//
/*        React.createElement('h1',
          {className:'mydiv'},
          'This is a class Component coming without jsx'
        )*/
      )
  }

}

export default Testclasscomp;


/*

class Profile extends React.Component{
  render(){
    return(
       <div> hello </div> 
    )
  }
}*/