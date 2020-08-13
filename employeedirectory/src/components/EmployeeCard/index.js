import React from "react";

function List(props) {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td> 
                    <td>{props.occupation}</td> 
                </tr>
            </tbody>
        </table>
    )};
  
  export default List;