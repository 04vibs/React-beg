import React, { Component } from 'react';

class EventBind extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            message: 'Hello'
        }
        // using bind method in constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "bye"
    //     })
    // }

    // 4th approach using arrow fun
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        })
    }

    render() {
    return (
    <div>
        <div>{this.state.message}</div>
        {/* 1st approach using bind method in render fun for passing this
          <button onClick={this.clickHandler.bind(this)}>click</button>
         */}
        {/* 2nd approach 
        <button onClick={()=> this.clickHandler()}>click</button> */}
        {/* 3rd approach
        <button onClick={this.clickHandler}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
    </div>
    );
  }
}

export default EventBind;
