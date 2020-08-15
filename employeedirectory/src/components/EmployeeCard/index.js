import React from "react";

function List(props) {
    return (

        <tbody>
            { props.results.map(employee => (
            <tr>
                <td> {employee.name.first}</td>
                <td> {employee.name.last}</td> 
                <td> {employee.email}</td> 
                <td> {employee.dob.age}</td>
            </tr>
            ))}
        </tbody>
    )};
  export default List;