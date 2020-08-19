import React from "react";

function List(props) {
    return (
//      <tbody>
//         <tr>
//         { props.results.map(employee => (

//         <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">
//           <ul>
//             <li>
//               <strong>Name:</strong> {employee.name.first}, {employee.name.last}
//             </li>
//             <li>
//               <strong>Email:</strong> {employee.email}
//             </li>
//             <li>
//               <strong>Age:</strong> {employee.dob.age}
//             </li>
//           </ul>
//         </div>
//       </div>
//       ))}
//     </tr>
// </tbody>
     <tbody> 
         { props.results.map(employee => ( 
          <tr >
                <td> {employee.name.first}</td>
                <td> {employee.name.last}</td> 
                <td> {employee.email}</td> 
                <td> {employee.dob.age}</td>
            </tr>
            ))}
         </tbody> 
    )};
  export default List;