import React from 'react';
import './App.css';
import {CustomMenu, CustomToggle} from './utility';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const lang = [{name:"aaaa"},{name:"bbb"},{name:"ccc"}];
  let chld = [];
  const clicking = (e) =>
  {
    console.log("**************"+e.target.name);
  }
  
  return(
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        English
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item onClick = {clicking} name="sandy" eventKey="1">Red</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );  
}

export default App;















