import React, { Component } from 'react';
// conditional rendering 

class UserGreeting extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        //4th short circuit mechanism if you only want to render only one condition and do nothing if false
            return this.state.isLoggedIn && <div>Welcome Prashant</div>
        // 3rd ternory condition
        // return(
        //     this.state.isLoggedIn ? (<div>Welcome Prashant</div>) : (<div>Welcome Guest</div>)
        // )

        // 1st and 2nd approach cannot be used inside jsx i.e inside return
        // 2nd approach using variable
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Prashant </div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        //1 st approach if else
        // if(this.state.isLoggedIn){
        //     return (<div>welcome Prashant Lesson 16</div>);
        // }else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
    // return (
    // <div>
    //     <div>welcome Prashant Lesson 16</div>
    //     <div>Welcome Guest</div>
    // </div>
    // );
  }
}

export default UserGreeting;
