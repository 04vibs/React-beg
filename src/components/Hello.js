// function component
// jsx component
import React from 'react';

const Hello = () => {
   // jsx 
  //  return (
  //      <div>
  //          <h1>Hello Prashant</h1>
  //      </div>
  //  )

  // normal without jsx
  return React.createElement(
      'div',
      {id: 'hello', className: 'dummyClass'},
      React.createElement('h1', null, 'Hello Prashant')
  )  
}

export default Hello;