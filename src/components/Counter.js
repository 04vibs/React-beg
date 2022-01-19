import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increement() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('callback value', this.state.count)
        // }
        // )
        // console.log(this.state.count);
        /** If you want to increement by 5 or calling a same function 5 times 
         * you have to pass function in setState 
         * as set state take 5 calls into one call rather than making 5 calls
         * for that prevstate is used
         * for reference : https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11
         */
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    increementFive(){
        this.increement();
        this.increement();
        this.increement();
        this.increement();
        this.increement();
    }

  render() {
    return (
    <div>
        <div>Count - {this.state.count}</div>
        {/* <button onClick={()=> this.increement()}>Increement</button> */}
        <button onClick={()=> this.increementFive()}>Increement</button>
    </div>
    );
  }
}

export default Counter;
