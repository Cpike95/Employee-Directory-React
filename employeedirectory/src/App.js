import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title/index.js";
import './App.css';
import List from './components/EmployeeCard/index.js'
import employees from "./employees.json";
import Header from './components/Header/index.js'

class App extends Component {
  state = {
    employees
  };
//sorting function by last name state
handleSort = (items) => {
  const { occupation } = items;
  let sorted = [...occupation];
  sorted.sort((a, b) => {
    if (a.items.occupation < b.items.occupation) {
      return -1;
    }
    if (a.items.occupation > b.items.occupation) {
      return 1;
    }
    return 0;
  });
}
  render() {
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        <Header/>
          {this.state.employees.map(emp => (
              <List 
              id={emp.id}
              key={emp.id}
              firstName={emp.firstName}
              lastName={emp.lastName}
              occupation={emp.occupation}  
              />
           ))};
    </Wrapper>
    )
  };
}
export default App;
