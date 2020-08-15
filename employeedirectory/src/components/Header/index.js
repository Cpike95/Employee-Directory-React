import React from "react";
import List from "../EmployeeCard";

function Header(props){

    return (
      <table className="table">

        <thead className="thead-dark" >
            <tr>       
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th> 
              <th scope="col">Email</th> 
              <th scope="col">  
              {/* //Use the handle sort method on the occupation field */}
                <button type="button" onClick={props.sortDescending}>Age</button>
              </th>
            </tr>
        </thead>
          <List 
            key={props.results}
            results={props.results}
          />
          </table>
  )};

export default Header;