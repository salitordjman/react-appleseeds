import React, { Component } from 'react';
import './App.css';

class App extends Component {
  newRef = React.createRef()
  state = { favoriteColor: 'gray' };
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor:this.newRef.current.value= "red"})
    }, 1000);
  }
  componentDidUpdate(){
    this.newRef.current.innerText= `The updated favorite color is ${this.newRef.current.value}`
  }
  
  render() {
    return (
        <div>
          <h1>My favorite color is {this.state.favoriteColor}</h1>
          <div ref={this.newRef}></div>
        </div>
      );
    }
}

export default App;










        // import React, { Component } from 'react';
        // import './App.css';
        
        // class App extends Component {
        //   state = { favoriteColor: 'gray' };
        
        //   componentDidMount() {
        //     setTimeout(() => {
        //       this.setState({favoriteColor: "blue"})
        //     }, 1000);
        //   }
        //   componentDidUpdate(){
        //     const idAttribute= document.querySelector("#idAttribute");
        //     idAttribute.innerText= `The updated favorite color is ${this.state.favoriteColor}`
        //   }
        
        //   render() {
        //     return (
        //         <div>
        //           <h1>My favorite color is {this.state.favoriteColor}</h1>
        //           <div id="idAttribute"></div>
        //         </div>
        //       );
        //     }
        // }
        
        // export default App;