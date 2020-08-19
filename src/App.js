import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title/index.js";
import Search from './components/Search/index.js'
import Header from './components/Header/index.js'
import API from "./utils/API";

class App extends Component {
  state = {
    results:[],
    search: '',
    isOldestFirst: true,
  };

  componentDidMount() {
    this.testEmployees();
  }

  testEmployees = () => {
    API.displayEmployees()
      .then(res => this.setState({ results: res.data.results, isOldestFirst: true }))   
      .catch(err => console.log(err))
    };
 
  handleInputChange = event => {
    event.preventDefault();
    this.setState({search : event.target.value})
  }

//sort the results by age then render the sort 
//change state to true if isOldestFirst is true
  sortOld =()=> {
    this.setState({isOldestFirst: true})
  }

  //change state to false if isOldestFirst false
  sortYoung=()=>{
    this.setState({isOldestFirst: false})
  }

  sortAge= () => {
    const  {results}  = this.state;
    let newOrder = results;
    if(this.state.isOldestFirst){ 
       newOrder.sort((a,b) => a.dob.age - b.dob.age);
       this.sortYoung();
    } else if (!this.state.isOldestFirst){
       newOrder.sort((a,b) => b.dob.age - a.dob.age);
       this.sortOld()

    } 
  };
  handleSort= () => {
    this.sortAge();
  };
  render() {
  //   // we can filter our results/employees here
  //   // have some code (using .filter method on our this.state)
    const filteredResults = this.state.results.filter(employee => employee.name.first.includes(this.state.search))
 
  console.log(this.state)
  return(
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search  handleInputChange={this.handleInputChange} />
           <Header
              results={filteredResults}
              handleSort={this.handleSort}
              isOldestFirst={this.state.isOldestFirst}
              />       
    </Wrapper>
    )
  };
}

export default App;
