import React from 'react';
import '../App.css';
import { useState } from 'react';

function List(){

  const [title, setTitle] = useState (' ');


    return (
      <div className="list">
        <h1>IDK why you're not working</h1>
        <input placeholder="List Name" type='text' onChange={e => setTitle(e.target.value)}></input>
      </div>
    );
  }
  
  export default List;