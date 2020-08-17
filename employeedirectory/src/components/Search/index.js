import React from "react";

function Search(props) {
 
    return (
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search For an Employee"
                        id="search"
                    />                
        </div>
        
    )
}
export default Search;