import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello  from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick />
        <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Prashant" heroName="Batman">
          This is children one
        </Greet>
        <Greet name="clark" heroName="Superman">
          This is children two
        </Greet>
        <Greet name="Diana" heroName="wonder woman">
          This is children three
        </Greet>
        <Welcome name="Prashant" heroName="Batman" /> */}
        
        {/* <Hello />  */}
      </div>
    );
  }
}

export default App;
