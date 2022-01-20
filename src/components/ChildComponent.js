import React from 'react';

function ChildComponent(props) {
  return (
  <div>
      {/* Parent to child
       <button onClick={props.greetHandler}>Greet Parent</button> 
       */}

       <button onClick={()=>props.greetHandler('çhild')}> greet parent</button>
  </div>
  );
}

export default ChildComponent;
