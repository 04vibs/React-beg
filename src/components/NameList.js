import React from 'react';
import Person from './Person';

function NameList() {
    
    const persons = [
        {
            id: 1,
            name: 'Prashant',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Rahul',
            age: 31,
            skill: 'Angular'
        }
    ]
    // const names = ['Prashant','Rahul','Rohan'];
    // const nameList = names.map(name => <h2>{name}</h2>)
    //using props for person List
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
    <div>
        {/* {nameList} */}
        {personList}
    </div>
  );
}

export default NameList;