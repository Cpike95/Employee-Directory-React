import React from "react";

function Header(props){

  //Use the handle sort method on the occupation field
    return(

     <table className="table">
        <thead className="thead-dark">
            <tr>        
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th> 
              <th scope="col">
                <button type="button" onClick={props.handleSort}>Occupation</button>
              </th>
            </tr>
        </thead>
    </table>
    
  )};

export default Header;