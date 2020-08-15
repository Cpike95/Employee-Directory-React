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
    
  };

  componentDidMount() {
    this.testEmployees();
  }

  testEmployees = () => {
    API.displayEmployees()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  // sortDescending = () => {
  //   const { occupation } = this.state;
  //   occupation.sort((a, b) => a - b).reverse()
  //   this.setState({ occupation })
  // };
   handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };
  render() {
    // we can filter our results/employees here
    // have some code (using .filter method on our this.state.results)
    const filteredResults = this.state.results.filter(employee => employee.name.first.includes(this.state.search))
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <Search handleInputChange={this.handleInputChange}/>
           <Header
              key={this.state.results}
              results={filteredResults}
              />       
    </Wrapper>
    )
  };
}
export default App;
